import { NextApiRequest, NextApiResponse } from "next";
import { Spotify } from "@lib/types";
import IORedis from "ioredis";
import getAccessToken from "@lib/spotify/getAccessToken";
import getPlaylistById from "@lib/spotify/getPlaylistById";

export type SpotifyPlaylistResponse = SuccessResponse | FailureResponse;

interface SuccessResponse {
  success: true;
  playlists: Spotify.Playlist[];
}

interface FailureResponse {
  success: false;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyPlaylistResponse>
) {
  if (req.method !== "POST")
    return res.status(404).json({
      success: false,
      message: `${req.method} not allowed`,
    });

  const host =
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "abhinavrajesh.com";

  if (!req.headers.host?.includes(host))
    return res.status(403).json({
      success: false,
      message: `unauthorized`,
    });

  console.log(req.body);

  if (!req.body?.playlistIds) {
    return res.status(400).json({
      success: false,
      message: `Invalid body`,
    });
  }

  const redis = new IORedis(process.env.REDIS_URL as string);
  try {
    const [accessToken, refreshToken] = await redis.mget(
      "spotify:access_token",
      "spotify:refresh_token"
    );
    let token: string;
    if (!accessToken && refreshToken) {
      // Access token expired, create new access token
      const {
        success,
        accessToken,
        expiresIn,
        refreshToken: newRefreshToken,
      } = await getAccessToken(refreshToken);

      if (success) {
        await redis.set(
          "spotify:access_token",
          accessToken as string,
          "EX",
          expiresIn as string
        );
        token = accessToken as string;
        if (newRefreshToken) {
          await redis.set("spotify:refresh_token", newRefreshToken);
        }
      } else {
        throw new Error("Some error occured while fetching the access token");
      }
    } else if (accessToken) {
      // When access token is valid
      token = accessToken;
    } else {
      // No access or refresh token present in redis
      throw new Error("No access token/refresh token found");
    }
    await redis.quit();

    const playlistPromises = req.body?.playlistIds?.map((id: string) =>
      getPlaylistById("1btozxcm2gj1kzu1t2kctpasn", id, token)
    );

    const playlistsResponse = await Promise.all(playlistPromises);
    const playlists = playlistsResponse?.map(({ playlists }) => playlists?.[0]);

    return res.status(200).json({
      success: true,
      playlists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, check logs",
    });
  }
}

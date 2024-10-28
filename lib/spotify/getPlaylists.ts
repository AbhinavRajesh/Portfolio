import { Spotify } from "@lib/types";
import axios from "axios";
import getPlaylistById from "./getPlaylistById";

interface Response {
  success: boolean;
  playlists: Spotify.Playlist[];
}

const getPlaylists = async (
  userId: string,
  accessToken: string
): Promise<Response> => {
  const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
  try {
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const playlistPromises = data?.items?.map((playlist: any) => {
      const playlistId = playlist?.external_urls?.spotify?.split("/")?.pop();
      return getPlaylistById(userId, playlistId, accessToken);
    });

    const playlistsResponse = await Promise.all(playlistPromises);
    const playlists = playlistsResponse?.map(({ playlists }) => playlists?.[0]);
    return {
      success: true,
      playlists,
    };
  } catch (error: any) {
    console.log("ERROR getPlaylists >> ", error.response);
    return {
      success: false,
      playlists: [],
    };
  }
};

export default getPlaylists;

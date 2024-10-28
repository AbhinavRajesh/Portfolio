import { Spotify } from "@lib/types";
import axios from "axios";
// import getPlaylistById from "./getPlaylistById";

interface Response {
  success: boolean;
  playlists: Spotify.Playlist[];
  playlistIds: string[];
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
    const playlistIds = data?.items?.map((playlist: any) =>
      playlist?.external_urls?.spotify?.split("/")?.pop()
    );

    const playlists = data?.items?.map((playlist: any) => {
      return {
        name: playlist?.name,
        description: playlist?.description,
        imageUrl: playlist?.images?.[0]?.url ?? "",
        numberOfTracks: playlist?.tracks?.total,
        url: playlist?.external_urls?.spotify,
      } as Spotify.Playlist;
    });

    // const playlistsResponse = await Promise.all(playlistPromises);
    // const playlists = playlistsResponse?.map(({ playlists }) => playlists?.[0]);
    return {
      success: true,
      playlists,
      playlistIds,
    };
  } catch (error: any) {
    console.log("ERROR getPlaylists >> ", error.response);
    return {
      success: false,
      playlists: [],
      playlistIds: [],
    };
  }
};

export default getPlaylists;

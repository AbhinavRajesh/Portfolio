import { Spotify } from "@lib/types";
import axios from "axios";

interface Response {
  success: boolean;
  playlists: Spotify.Playlist[];
}

const getPlaylistById = async (
  userId: string,
  playlistId: string,
  accessToken: string
): Promise<Response> => {
  const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}`;
  try {
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    let playlists: Spotify.Playlist[] = [];
    if (data.public) {
      playlists.push({
        name: data?.name,
        description: data?.description,
        imageUrl: data?.images?.[0]?.url ?? "",
        numberOfTracks: data?.tracks?.total,
        url: data?.external_urls?.spotify,
        followers: data?.followers?.total,
      });
    }

    return {
      success: true,
      playlists: playlists,
    };
  } catch (error: any) {
    console.log("ERROR getPlaylists >> ", error.response);
    return {
      success: false,
      playlists: [],
    };
  }
};

export default getPlaylistById;

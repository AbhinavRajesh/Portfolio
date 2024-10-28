import axios from "axios";
import getPlaylistById from "./getPlaylistById";
import { Spotify } from "@lib/types";

interface Response {
  success: boolean;
  playing: boolean;
  song: string | null;
  artist: string | null;
  url: string | null;
  imageUrl: string | null;
  explicit: boolean;
  playlist: Spotify.Playlist | null;
}

const getCurrentlyPlaying = async (accessToken: string): Promise<Response> => {
  const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";

  try {
    const { data, status } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlistId = data?.context?.external_urls?.spotify?.split("/")?.pop();
    let playlist: Spotify.Playlist | null = null;
    if (playlistId) {
      const userId = "1btozxcm2gj1kzu1t2kctpasn";
      const { playlists } = await getPlaylistById(
        userId,
        playlistId,
        accessToken
      );
      playlist = playlists?.[0] ?? null;
    }

    if (status === 204 || !data.is_playing)
      return {
        success: true,
        playing: false,
        song: null,
        artist: null,
        url: null,
        imageUrl: null,
        explicit: false,
        playlist,
      };
    return {
      success: true,
      playing: true,
      song: data?.item?.name,
      url: data?.item?.external_urls?.spotify,
      artist: data?.item?.artists
        ?.map((artist: any) => artist?.name)
        .join(", "),
      imageUrl: data?.item?.album?.images?.[0]?.url ?? null,
      explicit: data?.item?.explicit ?? false,
      playlist,
    };
  } catch (error) {
    return {
      success: false,
      artist: null,
      playing: false,
      song: null,
      url: null,
      imageUrl: null,
      explicit: false,
      playlist: null,
    };
  }
};

export default getCurrentlyPlaying;

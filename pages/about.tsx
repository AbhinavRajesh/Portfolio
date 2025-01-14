import HeadMeta from "@components/partials/HeadMeta";
import CurrentlyPlaying from "@components/parts/CurrentlyPlaying";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";
import Playlists from "@components/parts/Playlists";
import TopTracks from "@components/parts/TopTracks";
import { APP_URL } from "@lib/data";
import { Spotify } from "@lib/types";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { SpotifyResponse } from "./api/data/spotify";
import { SpotifyCurrentlyPlayingResponse } from "./api/data/spotify/currently_playing";

interface Props {
  playlists: Spotify.Playlist[];
  topTracks: Spotify.TopTracks[];
  playlistIds: string[];
}

interface CachedCurrentlyPlaying extends Spotify.CurrentlyPlaying {
  lastUpdated: string;
}

const About: NextPage<any> = ({
  playlists: serverPlaylists,
  topTracks,
  playlistIds,
}: Props) => {
  const [playlists, setPlaylists] =
    useState<Spotify.Playlist[]>(serverPlaylists);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<Spotify.CurrentlyPlaying>();

  const getCurrentlyPlayingData = async () => {
    if (isFetching) return;
    const cachedCurrentlyPlayingString =
      sessionStorage.getItem("currentlyPlaying");
    const cachedCurrentlyPlaying = cachedCurrentlyPlayingString
      ? ((await JSON.parse(
          cachedCurrentlyPlayingString
        )) as CachedCurrentlyPlaying)
      : null;
    if (
      cachedCurrentlyPlaying &&
      new Date().getTime() / 1000 -
        parseInt(cachedCurrentlyPlaying.lastUpdated) <
        30
    ) {
      setCurrentlyPlaying(cachedCurrentlyPlaying);
      return;
    }
    const response = await fetch(`/api/data/spotify/currently_playing`, {
      method: "POST",
      body: null,
    });
    const data = (await response.json()) as SpotifyCurrentlyPlayingResponse;

    if (data.success) {
      const { success, ...rest } = data;
      if (data.playing)
        sessionStorage.setItem(
          "currentlyPlaying",
          JSON.stringify({
            ...rest,
            lastUpdated: new Date().getTime() / 1000,
          })
        );
      setCurrentlyPlaying(rest);
    }
  };

  const getPlaylists = async () => {
    if (isFetching || !playlistIds || playlistIds?.length === 0) return;
    const response = await fetch(`/api/data/spotify/get_playlist_by_ids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        playlistIds,
      }) as any,
    });

    const json = await response.json();
    setPlaylists(json.playlists);
  };

  const fetchPageData = async () => {
    setIsPageLoading(true);
    setIsFetching(true);
    await Promise.all([getCurrentlyPlayingData(), getPlaylists()]);
    setIsFetching(false);
    setIsPageLoading(false);
  };

  useEffect(() => {
    if (!isFetching && isPageLoading) {
      fetchPageData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[100vh] font-inter">
      <HeadMeta
        title="About | Abhinav Rajesh"
        description="All about Abhinav Rajesh. Still a work in progress, meanwhile you can checkout the spotify stats and get to know the music taste of Abhinav!"
        image=""
        keywords=""
        url="https://abhinavrajesh.com/about"
      />
      <Navbar />
      <div className="flex px-4 flex-col pt-[86px] text-black dark:text-white dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black min-h-screen">
        <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
          <h1 className="text-5xl font-black text-center">Under Work :(</h1>
          <p className="text-lg font-medium text-center mt-[32px]">
            Meanwhile you can checkout my spotify stats :)
          </p>
        </div>
        {currentlyPlaying?.playing && (
          <CurrentlyPlaying currentlyPlaying={currentlyPlaying} />
        )}
        {playlists.length > 0 && <Playlists playlists={playlists} />}
        {topTracks.length > 0 && <TopTracks topTracks={topTracks} />}
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await axios.get<SpotifyResponse>(
      `${APP_URL}/api/data/spotify`,
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      }
    );

    if (data.success) {
      const topTracks = (data?.topTracks as Spotify.TopTracks[]).filter(
        ({ name }) => !name?.includes("BRODYAGA")
      );

      return {
        props: {
          playlists: data.playlists.filter(
            ({ numberOfTracks }) => numberOfTracks !== 0
          ) as Spotify.Playlist[],
          topTracks,
          playlistIds: data?.playlistIds ?? [],
        },
        revalidate: 1 * 60 * 60,
      };
    } else {
      return {
        props: {
          playlists: [],
          topTracks: [],
          playlistIds: [],
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        playlists: [],
        playlistIds: [],
        topTracks: [],
      },
    };
  }
};

export default About;

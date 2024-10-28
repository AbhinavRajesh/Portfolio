import { Spotify } from "@lib/types";
import Image from "next/image";

type Modify<T, R> = Omit<T, keyof R> & R;

type Props = Modify<
  Spotify.Playlist,
  {
    description?: string;
    numberOfTracks?: number;
    explicit?: boolean;
    playlist?: Spotify.Playlist | null;
  }
>;

const SpotifyCard = ({
  description,
  imageUrl,
  name,
  numberOfTracks,
  url,
  explicit,
  playlist,
  followers,
}: Props) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col group"
      >
        <div className="aspect-square overflow-hidden w-full relative mb-[15px] rounded-[6px]">
          <div className="aspect-square w-full rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
            <Image
              src={imageUrl as string}
              alt={name}
              className="aspect-square"
              fill
              sizes="100vw"
            />
          </div>
          {typeof followers === "number" && followers > 0 && (
            <span className="z-10 bottom-[4px] right-[4px] text-[14px] font-bold absolute px-[12px] py-[2px] rounded-full text-black bg-white flex items-center">
              {followers}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                className="ml-[4px]"
              >
                <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z" />
              </svg>
            </span>
          )}
        </div>
        <h3 className="font-semibold">
          {explicit && (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="inline -mt-[3px] mr-1 text-gray-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path>
            </svg>
          )}
          {name}{" "}
          {description && (
            <>
              •{" "}
              <span className="font-normal text-xs text-gray-400 mt-[5px]">
                {description}
              </span>
            </>
          )}
        </h3>
        {numberOfTracks && (
          <p className="font-normal text-xs text-gray-400">
            {numberOfTracks} tracks
          </p>
        )}
      </a>
      {playlist && (
        <a
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-semibold flex items-center text-gray-400"
        >
          <span className="pr-[4px]">{playlist.name}</span>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      )}
    </>
  );
};

export default SpotifyCard;

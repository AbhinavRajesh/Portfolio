import Image from "next/image";

import Map from "@public/assets/map.svg";

const MapPin = () => {
  return (
    <div className="p-[3px] tablet:p-[4px] bg-white flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-primary_light shadow-2xl dark:shadow-primary_dark">
      <div className="w-[30px] h-[30px] tablet:w-[35px] tablet:h-[35px] bg-primary_light dark:bg-primary_dark rounded-full"></div>
    </div>
  );
};

const From = () => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h2 className="text-xl font-bold text-black dark:text-white">From</h2>
      <div className="mt-6 relative">
        <Image
          src={Map}
          alt="Kerala, India Map View"
          width={800}
          height={400}
          quality={100}
          className="rounded-[10px]"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <MapPin />
      </div>
      <div className="flex items-center justify-end mt-[5px] text-dark dark:text-text_dark">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-5 h-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span className="text-dark dark:text-text_dark text-xs ml-1">
          Kerala, India
        </span>
      </div>
    </div>
  );
};

export default From;

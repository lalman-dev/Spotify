import { CirclePlus, Play, Share } from "lucide-react";
import thumbnail1 from "/src/assets/Taylor_Swift.png";
import thumbnail2 from "/src/assets/taylor.png";

import PlayLibraries from "./PlayLibraries";

const SongSection = () => {
  return (
    <aside
      aria-label="Song Section"
      className="w-260 h-160 rounded-2xl bg-linear-to-b from-[#222222] to-[#121212] px-5 py-2"
    >
      <nav aria-label="Song filter">
        <ul role="list" className="flex overflow-x-auto scrollbar-hide py-2">
          <li role="list-item">
            <button className="bg-white text-[#121212] text-sm rounded-3xl p-1 w-12 m-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-gray-300">
              All
            </button>
          </li>
          <li role="list-item">
            <button className="bg-[#323232] rounded-3xl text-gray-200 text-sm p-1 w-17 m-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#424242]">
              Music
            </button>
          </li>
          <li role="list-item">
            <button className="bg-[#323232] rounded-3xl text-gray-200 text-sm p-1 w-22 m-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#424242]">
              Podcasts
            </button>
          </li>
          <li role="list-item">
            <button className="bg-[#323232] rounded-3xl text-gray-200 text-sm p-1 w-20 m-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#424242]">
              Albums
            </button>
          </li>
          <li role="list-item">
            <button className="bg-[#323232] rounded-3xl text-gray-200 text-sm p-1 w-20 m-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#424242]">
              Artists
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <section aria-labelledby="artist-heading" className="flex flex-col">
          <header className="flex mt-3">
            <img
              src={thumbnail1}
              alt="Taylor Swift"
              className="h-15 w-15 rounded-full"
            />
            <div className="ml-3">
              <span className="text-sm text-gray-400">new release from</span>
              <h2
                id="artist-heading"
                className="text-2xl text-gray-100 font-medium hover:underline cursor-pointer"
              >
                Taylor Swift
              </h2>
            </div>
          </header>
          <article
            aria-labelledby="album-title"
            className="mt-7 flex w-130 p-2 rounded hover:bg-linear-to-b from-[#111111] to-[#323232]"
          >
            <figure>
              <img
                src={thumbnail2}
                alt="Album cover: The Life of a Showgirl"
                className="h-50 w-50 rounded"
              />
            </figure>
            <div>
              <h2
                id="album-title"
                className="text-2xl text-gray-100 font-medium ml-4 mt-3 hover:underline cursor-pointer"
              >
                The Life of a Showgirl
              </h2>
              <p className="text-sm text-gray-400 ml-5">2025 Album</p>
              <div className="flex gap-7 m-10">
                <button
                  aria-label="Play Button"
                  className="relative bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group hover:scale-110 transform transition duration-300"
                >
                  <span>
                    <Play />
                  </span>
                  <span className="absolute left-1/2 top-full mt-5 -translate-x-1/2 bg-gray-800 text-gray-200 text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Play Life of a Showgirl
                  </span>
                </button>
                <button
                  aria-label="add album to library"
                  className="cursor-pointer group relative
            transform transition duration-300 hover:scale-110"
                >
                  <span>
                    <CirclePlus color="white" className="w-8 h-10 " />
                  </span>
                  <span className="absolute top-full left-1/2 mt-5 -translate-x-1/2 bg-gray-800 text-gray-200 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Add this album to library
                  </span>
                </button>
                <button
                  aria-label="Share album"
                  className="opacity-0 hover:opacity-100
              cursor-pointer group relative
            transform transition duration-300 hover:scale-110"
                >
                  <span>
                    <Share color="white" />
                  </span>
                  <span className="absolute top-full left-1/2 mt-5 -translate-x-1/2 bg-gray-800 text-gray-200 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Share this album
                  </span>
                </button>
              </div>
            </div>
          </article>
        </section>
        {/* Personalized Playlists */}
        <section className="mx-5 my-3.5 ">
          <span className="text-sm text-gray-400">Made For</span>
          <header className="flex items-center justify-between w-100">
            <h2 className="text-2xl text-gray-100 font-medium hover:underline cursor-pointer mt-1">
              Lalman Chaudhary
            </h2>
            <span className="text-sm text-gray-400 ml-2 cursor-pointer hover:underline">
              show all
            </span>
          </header>
          <PlayLibraries maxWidth="max-w-120" />
        </section>
      </div>

      <section aria-labelledby="extra-libraries">
        <h2 id="extra-libraries" className="sr-only">
          Additional Libraries
        </h2>
        <PlayLibraries maxWidth="max-w-full" />
      </section>
    </aside>
  );
};

export default SongSection;

import {
  House,
  Search,
  FolderSearch,
  CircleArrowDown,
  Bell,
  ExternalLink,
} from "lucide-react";
import logo from "/src/assets/spotify_white.png";
import group from "/src/assets/people-group-solid.svg";
import profile from "/src/assets/profile.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className="h-15 bg-black flex items-center justify-between
     px-6"
    >
      <section className="flex items-center gap-4">
        <a href="/" aria-label="Spotify Home">
          <img src={logo} alt="Spotify Logo" className="w-9" />
        </a>
        <button className=" relative rounded-full w-9 h-9 flex items-center justify-center bg-[#626262] group transform transition duration-300 hover:scale-110">
          <House color="#f2f2f2" className="cursor-pointer" />
          <span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
               bg-gray-600 text-white text-xs rounded px-2 py-1 
               opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
          >
            Home
          </span>
        </button>
        <form
          role="search"
          className="w-100 h-11 border rounded-3xl  bg-[#323232] flex items-center px-3 justify-between"
        >
          <label htmlFor="search" className="sr-only">
            {" "}
            Search
          </label>
          <Search
            size={26}
            color="#cccccc"
            className="cursor-pointer transform transition duration-300 hover:scale-120"
          />
          <input
            id="search"
            type="search"
            placeholder="What do you want to play?"
            className=" w-76 ml-2 h-9  bg-transparent border-none text-white focus:outline-none"
          />
          <span
            aria-hidden="true"
            className="h-8 border-r border-gray-300 mr-2"
          ></span>
          <button type="button" aria-label="Browse ">
            <FolderSearch
              color="#cccccc"
              className="transform transition duration-300 hover:scale-120"
            />
          </button>
        </form>
      </section>
      <section className="flex gap-5 items-center ">
        <button className="bg-[#f1f1f1] text-black text-sm font-semibold py-1.5 px-3 rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105">
          Explore Premium
        </button>
        <button className="flex items-center cursor-pointer transform transition duration-300 hover:scale-110">
          <CircleArrowDown color="#f1f1f1" className="w-4" />
          <span className="text-[#cccccc] text-[13px] font-semibold ml-1 ">
            Install App
          </span>
        </button>
        <button className="relative inline-block group">
          <span>
            <Bell
              color="#cccccc"
              className="cursor-pointer transform transition duration-300 hover:scale-120"
            />
          </span>
          <span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
               bg-gray-600 text-white text-xs rounded px-2 py-1 
               opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
          >
            What's New
          </span>
        </button>
        <button className="relative inline-block group">
          <span>
            <img
              src={group}
              alt="Group Icon"
              className="w-5 cursor-pointer transform transition duration-300 hover:scale-120"
            />
          </span>
          <span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
               bg-gray-600 text-white text-xs rounded px-2 py-1 
               opacity-0 group-hover:opacity-100 transition whitespace-nowrap "
          >
            Friend Activity
          </span>
        </button>
        <div className="relative">
          <button
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
            aria-label="profile options"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            className="bg-[#323232] rounded-full w-12 h-12 flex items-center justify-center transform transition duration-300 hover:scale-110"
          >
            <img
              src={profile}
              alt="profile-pic"
              className="w-7 h-7 rounded-full cursor-pointer"
            />
          </button>
          {isMenuOpen && (
            <ul
              role="menu"
              className="absolute right-1 mt-2 px-0.5 bg-[#323232] text-white text-sm font-light rounded shadow-lg w-50"
            >
              <li
                role="menuitem"
                className="w-49 p-3 rounded  hover:bg-[#525252] hover:underline flex justify-between items-center"
              >
                {" "}
                <span>Account</span>
                <a href="/account">
                  <ExternalLink />
                </a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline"
              >
                <a href="/profile">Profile</a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline flex justify-between items-center"
              >
                <span>Upgrade to Premium</span>
                <a href="/upgrade">
                  <ExternalLink />
                </a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline flex justify-between items-center  "
              >
                <span>Support</span>
                <a href="/support">
                  <ExternalLink />
                </a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline flex justify-between items-center"
              >
                <span>Download</span>
                <a href="/download">
                  <ExternalLink />
                </a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline flex justify-between items-center"
              >
                <span>Settings</span>
                <a href="/settings">
                  <ExternalLink />
                </a>
              </li>
              <li
                role="menuitem"
                className="w-49 p-3 rounded hover:bg-[#525252] hover:underline"
              >
                <a href="/log-out">Log Out</a>
              </li>
            </ul>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

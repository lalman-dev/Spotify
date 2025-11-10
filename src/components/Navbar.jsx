import {
  House,
  Search,
  FolderSearch,
  CircleArrowDown,
  Bell,
} from "lucide-react";
import logo from "/src/assets/spotify_white.png";
import group from "/src/assets/people-group-solid.svg";
import profile from "/src/assets/profile.png";

const Navbar = () => {
  return (
    <div
      className="h-15 bg-black flex items-center justify-between
     px-6"
    >
      <div className="flex items-center gap-4">
        <img src={logo} alt="Spotify Logo" className="w-9" />
        <div className="rounded-full w-9 h-9 flex items-center justify-center bg-[#626262]">
          <House color="#f2f2f2" className="cursor-pointer" />
        </div>
        <div className="w-100 h-12 border rounded-3xl  bg-[#323232] flex items-center px-3 justify-between">
          <div className="flex items-center">
            <Search size={26} color="#cccccc" className="cursor-pointer" />
            <input
              className=" w-60 ml-2 h-9 rounded-2xl bg-transparent border-none text-white"
              type="text"
              placeholder="What do you want to play?"
            />
          </div>
          <div>
            <FolderSearch color="#cccccc" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center ">
        <p className="bg-[#f1f1f1] text-black text-sm font-bold py-2 px-3 rounded-3xl cursor-pointer">
          Explore Premium
        </p>
        <div className="flex items-center cursor-pointer">
          <CircleArrowDown color="#f1f1f1" />
          <p className="text-[#cccccc] text-sm font-bold ml-1">Install App</p>
        </div>
        <Bell color="#cccccc" className="cursor-pointer" />
        <img src={group} alt="Group Icon" className="w-5 cursor-pointer" />
        <div className="bg-[#323232] rounded-full w-12 h-12 flex items-center justify-center">
          <img
            src={profile}
            alt="profile-pic"
            className="w-7 h-7 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

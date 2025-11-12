import { Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-95 h-160 rounded-2xl bg-[#121212]  p-4 text-white flex flex-col gap-6">
      <header className="flex justify-between px-5 items-center">
        <h2 className="font-bold">Your Library</h2>
        <button className="h-10 w-10 rounded-full bg-[#323232] flex justify-center items-center cursor-pointer transform transition duration-300 hover:scale-110">
          <Plus />
        </button>
      </header>
      <section className="w-80 h-35 rounded-2xl p-5 bg-[#222222]">
        <h3 className="font-bold">Create Your First Playlist</h3>
        <p className=" text-sm  mt-1">It's easy, we'll help you</p>
        <button
          className="bg-white font-bold rounded-3xl text-black w-30 h-8 text-[13px] mt-3
          cursor-pointer transform transition duration-300 hover:scale-105
        "
        >
          Create Playlist
        </button>
      </section>
      <section className="w-80 h-35 rounded-2xl p-5 bg-[#222222]">
        <h3 className="font-bold">Let's find some podcasts to follow</h3>
        <p className=" text-sm  mt-1">We'll keep you updated on new updates</p>
        <button
          className="bg-white font-bold rounded-3xl text-black w-35 h-8 text-[13px] mt-3
          cursor-pointer transform transition duration-300 hover:scale-105
        "
        >
          Browse Podcasts
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;

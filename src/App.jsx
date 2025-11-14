
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SongSection from "./components/SongSection";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <SongSection />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default App;

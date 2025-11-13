import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SongSection from "./components/SongSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <SongSection />
      </div>
    </div>
  );
};

export default App;

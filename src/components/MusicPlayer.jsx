import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Speaker,
  Settings2,
} from "lucide-react";
import { useState } from "react";
import thumbnail14 from "/src/assets/toptrack.png";

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 240; // example: 4 minutes

  const handleChange = (e) => {
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <section
      aria-label="Music Player"
      className="flex items-center justify-around mt-5 space-y-4"
    >
      {/* Track info */}
      <figure className="flex items-center">
        <img src={thumbnail14} alt="Top Track" className="w-20 rounded" />
        <figcaption className="ml-4">
          <header className="text-gray-200 text-sm">Top Track Hits 2025</header>
          <span className="text-gray-400 text-[10px]">
            Arijit Singh, Shreya Ghoshal, Pritam
          </span>
        </figcaption>
      </figure>

      {/* Controls */}
      <div className="flex flex-col items-center w-full max-w-md">
        <ul className="flex items-center gap-7 mb-2">
          <li>
            <Shuffle color="white" />
          </li>
          <li>
            <SkipBack color="white" />
          </li>
          <li className="bg-gray-300 h-11 w-11 rounded-full flex items-center justify-center">
            <Play color="white" />
          </li>
          <li>
            <SkipForward color="white" />
          </li>
          <li>
            <Repeat color="white" />
          </li>
        </ul>

        {/* Progress bar */}
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-gray-400">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleChange}
            className="w-full accent-green-500 cursor-pointer"
            aria-label="Track progress"
          />
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Extra controls */}
      <ul className="flex items-center gap-4">
        <li>
          <Speaker color="white" />
        </li>
        <li>
          <Settings2 color="white" />
        </li>
      </ul>
    </section>
  );
};

export default MusicPlayer;

import thumbnail3 from "/src/assets/ariana.png";
import thumbnail4 from "/src/assets/arijit1.png";
import thumbnail5 from "/src/assets/arijit2.png";
import thumbnail6 from "/src/assets/armaan.png";
import thumbnail7 from "/src/assets/discover.png";
import thumbnail8 from "/src/assets/happy.png";
import thumbnail9 from "/src/assets/indianhit.png";
import thumbnail10 from "/src/assets/kk.png";
import thumbnail11 from "/src/assets/megahit.png";
import thumbnail12 from "/src/assets/mix2010.png";
import thumbnail13 from "/src/assets/tophit.png";
import thumbnail14 from "/src/assets/toptrack.png";
const PlayLibraries = ({ maxWidth = "max-w-full" }) => {
  return (
    <section aria-labelledby="library-heading">
      <h2 id="library-heading" className="sr-only">
        Play Libraries
      </h2>

      <div
        className={`w-full ${maxWidth} overflow-x-auto overflow-y-hidden scrollbar-hide`}
      >
        <ul className="flex flex-nowrap">
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail3} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Best of Ariana Grande
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail4} alt="" className="w-40 h-40 rounded" />
              <span className="text-gray-200 text-[14px]">
                Release Radar <br />
                Arijit Singh
              </span>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail5} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Album: This is <br />
                Arijit Singh
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail6} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Hits of Armaan Malik
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail7} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Discover Weekly
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail8} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Happy Vibes
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail9} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Made in India:
                <br />
                Global Hits
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail10} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                This is KK
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail11} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Mega Hit Mix
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail12} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                2010s Mix
              </figcaption>
            </figure>
          </li>
          <li className="flex-none shrink-0 w-44 px-2 py-2 rounded-md hover:bg-[#323232]">
            <figure>
              <img src={thumbnail13} alt="" className="w-40 h-40 rounded" />
              <figcaption className="text-gray-200 text-[14px]">
                Top Track Hits
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlayLibraries;

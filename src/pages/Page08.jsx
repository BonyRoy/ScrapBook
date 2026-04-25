import twentfive from "../images/twentfive.png";
import twentysix from "../images/twentysix.png";
import twentyseven from "../images/twentyseven.png";
import twentyeight from "../images/twentyeight.png";
import twentynine from "../images/twentynine.png";
import thirty from "../images/thirty.png";

const TOP = [
  { src: twentfive, label: "25", rot: "tilt-1" },
  { src: twentysix, label: "26", rot: "tilt-2" },
  { src: twentyseven, label: "27", rot: "tilt-3" },
];

const BOTTOM = [
  { src: twentyeight, label: "28", rot: "tilt-4" },
  { src: twentynine, label: "29", rot: "tilt-5" },
  { src: thirty, label: "30", rot: "tilt-6" },
];

/** Book page 8 of 24 — 3×2 grid, “Center of our Chaos” between rows */
export default function Page08() {
  return (
    <div className="book-page-inner book-page-inner--page8-collage">
      <div className="page8-collage" aria-label="Photo grid">
        <span className="page8-deco page8-deco--star page8-deco--s1" aria-hidden="true" />
        <span className="page8-deco page8-deco--star page8-deco--s2" aria-hidden="true" />
        <span className="page8-deco page8-deco--star page8-deco--s3" aria-hidden="true" />
        <div className="page8-row">
          {TOP.map((item) => (
            <div
              key={item.label}
              className={`page8-tile page8-tile--${item.rot}`}
            >
              <img
                src={item.src}
                alt={`Center of our Chaos, photo ${item.label}`}
              />
            </div>
          ))}
        </div>
        <h2 className="page8-title">Center of our Chaos</h2>
        <div className="page8-row">
          {BOTTOM.map((item) => (
            <div
              key={item.label}
              className={`page8-tile page8-tile--${item.rot}${
                item.src === twentynine ? " page8-tile--landscape" : ""
              }`}
            >
              <img
                src={item.src}
                alt={`Center of our Chaos, photo ${item.label}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

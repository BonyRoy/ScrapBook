import decorStar from "./assets/decor-star.svg";
import decorFlower from "./assets/decor-flower.svg";

/** Fixed positions (% of viewport) — only stars & flowers, no interaction */
const DECOR = [
  { kind: "star", x: 7, y: 12, size: 38, r: -14 },
  { kind: "flower", x: 88, y: 9, size: 52, r: 8 },
  { kind: "star", x: 92, y: 38, size: 28, r: 22 },
  { kind: "flower", x: 5, y: 42, size: 46, r: -6 },
  { kind: "star", x: 18, y: 26, size: 22, r: 9 },
  { kind: "flower", x: 72, y: 22, size: 44, r: -12 },
  { kind: "star", x: 48, y: 8, size: 26, r: -20 },
  { kind: "flower", x: 32, y: 58, size: 40, r: 18 },
  { kind: "star", x: 63, y: 48, size: 32, r: 11 },
  { kind: "flower", x: 15, y: 78, size: 48, r: -5 },
  { kind: "star", x: 41, y: 35, size: 18, r: -8 },
  { kind: "flower", x: 85, y: 62, size: 50, r: 14 },
  { kind: "star", x: 78, y: 15, size: 24, r: -25 },
  { kind: "flower", x: 55, y: 72, size: 42, r: 6 },
  { kind: "star", x: 25, y: 88, size: 30, r: 19 },
  { kind: "flower", x: 95, y: 82, size: 38, r: -9 },
  { kind: "star", x: 58, y: 18, size: 20, r: 0 },
  { kind: "flower", x: 8, y: 58, size: 36, r: 11 },
  { kind: "star", x: 90, y: 52, size: 26, r: -11 },
  { kind: "flower", x: 38, y: 14, size: 34, r: -3 },
  { kind: "star", x: 14, y: 20, size: 16, r: 25 },
  { kind: "flower", x: 70, y: 88, size: 44, r: -7 },
  { kind: "star", x: 52, y: 92, size: 28, r: -16 },
  { kind: "flower", x: 96, y: 28, size: 32, r: 4 },
  { kind: "star", x: 33, y: 68, size: 22, r: 7 },
  { kind: "flower", x: 62, y: 38, size: 30, r: 20 },
  { kind: "star", x: 75, y: 68, size: 24, r: -19 },
  { kind: "flower", x: 22, y: 48, size: 40, r: -14 },
];

export default function BackgroundDecor() {
  return (
    <div className="app-bg-decor" aria-hidden="true">
      {DECOR.map((item, i) => {
        const src = item.kind === "star" ? decorStar : decorFlower;
        return (
          <img
            key={i}
            className={`app-bg-decor__img app-bg-decor__img--${item.kind}`}
            src={src}
            alt=""
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: item.size,
              height: "auto",
              transform: `translate(-50%, -50%) rotate(${item.r}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}

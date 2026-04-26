import decorStar from "./assets/decor-star.svg";
import decorFlower from "./assets/decor-flower.svg";

/** Same SVGs as site background — % positions inside .book-page-inner */
const ITEMS = [
  { kind: "star", left: 12, top: 16, size: 24, r: -12 },
  { kind: "flower", left: 86, top: 12, size: 32, r: 10 },
  { kind: "star", left: 82, top: 58, size: 20, r: 20 },
  { kind: "flower", left: 10, top: 70, size: 34, r: -8 },
  { kind: "star", left: 50, top: 8, size: 18, r: -6 },
  { kind: "flower", left: 72, top: 38, size: 28, r: 14 },
  { kind: "star", left: 28, top: 82, size: 22, r: 16 },
  { kind: "flower", left: 52, top: 78, size: 26, r: -4 },
  { kind: "star", left: 8, top: 42, size: 19, r: 14 },
  { kind: "flower", left: 38, top: 22, size: 26, r: -11 },
  { kind: "star", left: 65, top: 88, size: 21, r: -18 },
  { kind: "flower", left: 92, top: 48, size: 24, r: 7 },
];

/** Yellow stars + pink flowers on the tan page (behind page content) */
export default function BookPageSvgDecor() {
  return (
    <div className="book-page-svg-decor" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <img
          key={i}
          className={`book-page-svg-decor__img book-page-svg-decor__img--${item.kind}`}
          src={item.kind === "star" ? decorStar : decorFlower}
          alt=""
          data-no-preview
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: item.size,
            transform: `translate(-50%, -50%) rotate(${item.r}deg)`,
          }}
        />
      ))}
    </div>
  );
}

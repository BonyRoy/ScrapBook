/**
 * Subtle white star + “flower” shapes on the book paper (front + back).
 * Positions in % of the paper inset.
 */
const DECOR = [
  { k: "star", l: 6, y: 8, r: -12, s: 0.9 },
  { k: "flower", l: 14, y: 22, r: 8, s: 1 },
  { k: "star", l: 88, y: 10, r: 18, s: 0.85 },
  { k: "flower", l: 78, y: 15, r: -6, s: 0.95 },
  { k: "star", l: 42, y: 6, r: -20, s: 0.75 },
  { k: "flower", l: 5, y: 38, r: 14, s: 1.05 },
  { k: "star", l: 22, y: 48, r: 7, s: 0.8 },
  { k: "flower", l: 92, y: 42, r: -9, s: 0.88 },
  { k: "star", l: 50, y: 28, r: 0, s: 0.7 },
  { k: "flower", l: 36, y: 58, r: -14, s: 1.1 },
  { k: "star", l: 8, y: 62, r: 22, s: 0.82 },
  { k: "flower", l: 64, y: 52, r: 5, s: 0.9 },
  { k: "star", l: 18, y: 78, r: -8, s: 0.95 },
  { k: "flower", l: 82, y: 68, r: 12, s: 1 },
  { k: "star", l: 55, y: 80, r: 15, s: 0.78 },
  { k: "flower", l: 32, y: 88, r: -4, s: 0.92 },
  { k: "star", l: 70, y: 36, r: -18, s: 0.72 },
  { k: "flower", l: 48, y: 72, r: 9, s: 1.08 },
  { k: "star", l: 95, y: 24, r: 11, s: 0.68 },
  { k: "flower", l: 12, y: 90, r: -11, s: 0.85 },
  { k: "star", l: 60, y: 12, r: -5, s: 0.8 },
  { k: "flower", l: 75, y: 88, r: 6, s: 0.9 },
  { k: "star", l: 28, y: 32, r: 20, s: 0.75 },
  { k: "flower", l: 90, y: 78, r: -7, s: 0.98 },
];

export default function BookPagePaperDecor() {
  return (
    <div className="book-page-paper-decor" aria-hidden="true">
      {DECOR.map((d, i) => (
        <span
          key={i}
          className={`book-paper-deco book-paper-deco--${d.k}`}
          style={{
            left: `${d.l}%`,
            top: `${d.y}%`,
            transform: `translate(-50%, -50%) rotate(${d.r}deg) scale(${d.s})`,
          }}
        />
      ))}
    </div>
  );
}

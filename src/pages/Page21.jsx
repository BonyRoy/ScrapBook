/** Page 21 (last) — same layout as page 19 (3rd from end), closing note */
const P21_TEXT =
  "Ishita — thank you for the laughter that felt effortless, the plans we made in five minutes, and for turning ordinary days into something I still reach for in my memory. This little book is only a piece of it, but the feeling behind it is all heart.\n~ Parth";

export default function Page21() {
  return (
    <div className="book-page-inner book-page-inner--p19-remember">
      <div className="p19-shell" aria-label="With love">
        <span className="p19-deco p19-burst p19-burst--tr" aria-hidden="true" />
        <span className="p19-deco p19-burst p19-burst--bl" aria-hidden="true" />
        <span className="p19-deco p19-star" aria-hidden="true" />
        <span className="p19-deco p19-star p19-star--2" aria-hidden="true" />
        <span className="p19-deco p19-star p19-star--3" aria-hidden="true" />
        <span className="p19-deco p19-dot" aria-hidden="true" />
        <span className="p19-deco p19-dot p19-dot--2" aria-hidden="true" />
        <span className="p19-deco p19-arrow" aria-hidden="true" />
        <span className="p19-deco p19-tape" aria-hidden="true" />
        <span className="p19-deco p19-leaf" aria-hidden="true" />
        <div className="p19-panels" aria-hidden="true" />

        <div className="p19-copy">
          <h2 className="p19-title">With love…</h2>
          <p className="p19-body">{P21_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

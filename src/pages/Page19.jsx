/** Page 19 — “Remember when…” hand-letter + scrap decors */
const P19_TEXT =
  "I still smile when I think of our random plans, the chaos we called normal, and the nights that turned into stories… There was the time we laughed until nobody could speak 😂 — small moments, but they stay with you. I’m glad we got to live so many of them together.\n~ Parth";

export default function Page19() {
  return (
    <div className="book-page-inner book-page-inner--p19-remember">
      <div className="p19-shell" aria-label="Remember when">
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
          <h2 className="p19-title">Remember when…</h2>
          <p className="p19-body">{P19_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

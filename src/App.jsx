import React, { useCallback, useEffect, useRef } from "react";
import { BOOK_PAGES } from "./pages";
import MusicBar from "./MusicBar.jsx";
import BackgroundDecor from "./BackgroundDecor.jsx";
import "./App.css";

const SWIPE_MIN_PX = 56;
/** Reject as scroll if vertical movement exceeds horizontal by this factor. */
const SCROLL_VERT_DOMINANCE = 1.2;

const App = () => {
  const total = BOOK_PAGES.length;
  const [current, setCurrent] = React.useState(0);
  const canPrev = current > 0;
  const canNext = current < total - 1;

  const goNext = useCallback(() => {
    setCurrent((c) => (c < total - 1 ? c + 1 : c));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : c));
  }, []);

  const touchStart = useRef({ x: 0, y: 0, active: false });

  const onBookTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, active: true };
  };

  const onBookTouchEnd = (e) => {
    if (!touchStart.current.active) return;
    touchStart.current.active = false;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    if (absX < SWIPE_MIN_PX) return;
    if (absY > absX * SCROLL_VERT_DOMINANCE) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const onBookTouchCancel = () => {
    touchStart.current.active = false;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "PageUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div className="app">
      <BackgroundDecor />
      <MusicBar />
      <div
        className="book-scene"
        role="region"
        aria-label="Flip book. Swipe left for next page, right for previous."
        onTouchStart={onBookTouchStart}
        onTouchEnd={onBookTouchEnd}
        onTouchCancel={onBookTouchCancel}
      >
        <div className="book-stage">
          <div className="book-spine" aria-hidden="true" />
          <div className="book">
            {BOOK_PAGES.map((page, i) => {
              const isFlipped = i < current;
              const PageComponent = page.Component;
              return (
                <div
                  key={page.id}
                  className={`book-page${i === 0 ? " book-page--first" : ""}${
                    isFlipped ? " book-page--flipped" : ""
                  }`}
                  style={{
                    zIndex: isFlipped ? i : 1000 - (i - current),
                  }}
                  aria-hidden={i !== current}
                >
                  <div className="book-page-face book-page-face--front">
                    <PageComponent />
                  </div>
                  <div
                    className="book-page-face book-page-face--back"
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="book-toolbar">
        <button
          type="button"
          className="book-btn"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Previous page"
        >
          ← Previous
        </button>
        <span className="book-progress" aria-live="polite">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          className="book-btn"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default App;

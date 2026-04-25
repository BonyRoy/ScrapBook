import img31 from "../images/31.png";
import img32 from "../images/32.png";
import img33 from "../images/33.png";
import img34 from "../images/34.png";
import img35 from "../images/35.png";
import img36 from "../images/36.png";

/** Book page 9 of 24 — 3-column scrapbook, 31–36 + caption */
export default function Page09() {
  return (
    <div className="book-page-inner book-page-inner--page9-collage">
      <div className="page9-collage" aria-label="Photo collage">
        <span className="page9-deco page9-deco--star page9-deco--tr" aria-hidden="true" />
        <span className="page9-deco page9-deco--star page9-deco--bl" aria-hidden="true" />
        <span className="page9-deco page9-deco--dot" aria-hidden="true" />
        <span className="page9-deco page9-deco--flower" aria-hidden="true" />
        <span className="page9-deco page9-deco--flower page9-deco--flower2" aria-hidden="true" />

        <div className="page9-col page9-col--left">
          <figure className="page9-frame page9-frame--tilt1">
            <img src={img31} alt="Memory 31" />
          </figure>
          <figure className="page9-frame page9-frame--tilt2">
            <img src={img32} alt="Memory 32" />
          </figure>
        </div>

        <div className="page9-col page9-col--mid">
          <figure className="page9-frame page9-frame--tilt3">
            <img src={img33} alt="Memory 33" />
          </figure>
          <figure className="page9-frame page9-frame--tilt4">
            <img src={img34} alt="Memory 34" />
          </figure>
          <figure className="page9-frame page9-frame--landscape page9-frame--tilt5">
            <img src={img35} alt="Memory 35" />
          </figure>
        </div>

        <div className="page9-col page9-col--right">
          <figure className="page9-frame page9-frame--tilt6">
            <img src={img36} alt="Memory 36" />
          </figure>
          <span className="page9-washi" aria-hidden="true" />
          <p className="page9-tagline">JUST LOOKING LIKE A WOW</p>
        </div>
      </div>
    </div>
  );
}

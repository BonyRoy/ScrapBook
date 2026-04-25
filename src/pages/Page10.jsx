import img37 from "../images/37.png";
import img38 from "../images/38.png";
import img39 from "../images/39.png";
import img40 from "../images/40.png";
/* Swap to ../images/41.png when the asset exists (currently not in repo). */
import img41 from "../images/44.png";
import img42 from "../images/42.png";
import img43 from "../images/43.png";

/** Book page 10 of 24 — “The Model HER” 37–43 scrapbook spread */
export default function Page10() {
  return (
    <div className="book-page-inner book-page-inner--page10-model">
      <div className="page10-collage" aria-label="The Model HER">
        <span className="page10-deco page10-deco--flower-tl" aria-hidden="true" />
        <span className="page10-deco page10-deco--flower-br" aria-hidden="true" />
        <span className="page10-deco page10-deco--star-l" aria-hidden="true" />
        <span className="page10-deco page10-deco--star-r" aria-hidden="true" />
        <span className="page10-deco page10-deco--tag" aria-hidden="true" />

        <h2 className="page10-title">
          The Model <em>HER</em>
        </h2>

        <div className="page10-row page10-row--split">
          <figure className="page10-frame page10-frame--a">
            <img src={img37} alt="Memory 37" />
          </figure>
          <figure className="page10-frame page10-frame--b">
            <img src={img38} alt="Memory 38" />
          </figure>
        </div>

        <div className="page10-row page10-row--solo">
          <figure className="page10-frame page10-frame--c">
            <img src={img39} alt="Memory 39" />
          </figure>
        </div>

        <div className="page10-row page10-row--triple">
          <figure className="page10-frame page10-frame--d">
            <img src={img40} alt="Memory 40" />
          </figure>
          <figure className="page10-frame page10-frame--e">
            <img src={img41} alt="Memory 41" />
          </figure>
          <figure className="page10-frame page10-frame--f">
            <img src={img42} alt="Memory 42" />
          </figure>
        </div>

        <div className="page10-row page10-row--solo">
          <figure className="page10-frame page10-frame--g">
            <img src={img43} alt="Memory 43" />
          </figure>
        </div>

        <p className="page10-foot">She will deny this phase existed</p>
      </div>
    </div>
  );
}

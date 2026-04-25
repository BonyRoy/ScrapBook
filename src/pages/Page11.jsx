import img44 from "../images/44.png";
import img45 from "../images/45.png";
import img46 from "../images/46.png";
import img47 from "../images/47.png";

/** Book page 11 of 24 — “Miss Selfie Queen” 44–47 */
export default function Page11() {
  return (
    <div className="book-page-inner book-page-inner--page11-selfie">
      <div className="page11-collage" aria-label="Miss Selfie Queen">
        <span className="page11-deco page11-deco--flower-tr" aria-hidden="true" />
        <span className="page11-deco page11-deco--flower-bl" aria-hidden="true" />
        <span className="page11-deco page11-deco--star" aria-hidden="true" />
        <span className="page11-deco page11-deco--star page11-deco--star2" aria-hidden="true" />
        <span className="page11-deco page11-deco--star page11-deco--star3" aria-hidden="true" />
        <span className="page11-deco page11-deco--dot" aria-hidden="true" />

        <h2 className="page11-title">Miss Selfie Queen</h2>

        <figure className="page11-frame page11-frame--tl">
          <img src={img44} alt="Memory 44" />
        </figure>
        <figure className="page11-frame page11-frame--tr">
          <img src={img45} alt="Memory 45" />
        </figure>
        <figure className="page11-frame page11-frame--c">
          <img src={img46} alt="Memory 46" />
        </figure>
        <span className="page11-arrow" aria-hidden="true" />
        <figure className="page11-frame page11-frame--br">
          <img src={img47} alt="Memory 47" />
        </figure>
      </div>
    </div>
  );
}

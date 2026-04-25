import img66 from "../images/66.png";
import img67 from "../images/67.png";
import img68 from "../images/68.png";
import img69 from "../images/69.png";
import img70 from "../images/70.png";
import img71 from "../images/71.png";

/** Book page 15 of 24 — 66–71, “Chaotic Moments” + KHAO PIYO SOJAO */
export default function Page15() {
  return (
    <div className="book-page-inner book-page-inner--page15-chaos">
      <div className="page15-collage" aria-label="Chaotic moments">
        <span className="page15-deco page15-deco--star" aria-hidden="true" />
        <span className="page15-deco page15-deco--star page15-deco--s2" aria-hidden="true" />
        <span className="page15-deco page15-deco--star page15-deco--s3" aria-hidden="true" />
        <span className="page15-deco page15-deco--star page15-deco--s4" aria-hidden="true" />

        <h2 className="page15-title">Chaotic Moments</h2>

        <div className="page15-grid">
          <figure className="page15-frame page15-frame--top">
            <img src={img66} alt="Memory 66" />
          </figure>
          <figure className="page15-frame page15-frame--top">
            <img src={img67} alt="Memory 67" />
          </figure>
          <figure className="page15-frame page15-frame--top">
            <img src={img68} alt="Memory 68" />
          </figure>
          <figure className="page15-frame page15-frame--port">
            <img src={img69} alt="Memory 69" />
          </figure>
          <figure className="page15-frame page15-frame--wide">
            <img src={img70} alt="Memory 70" />
          </figure>
          <figure className="page15-frame page15-frame--port">
            <img src={img71} alt="Memory 71" />
          </figure>
        </div>

        <p className="page15-tag" lang="hi-Latn">
          KHAO PIYO SOJAO
        </p>
      </div>
    </div>
  );
}

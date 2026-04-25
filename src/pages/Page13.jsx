import img53 from "../images/53.png";
import img54 from "../images/54.png";
import img55 from "../images/55.png";
import img56 from "../images/56.png";
import img57 from "../images/57.png";
import img58 from "../images/58.png";
import img59 from "../images/59.png";
import img60 from "../images/60.png";

/** Book page 13 of 24 — 53–60 + “We love you in your quirks” */
export default function Page13() {
  return (
    <div className="book-page-inner book-page-inner--page13-love">
      <div className="page13-collage" aria-label="We love you in your quirks">
        <span className="page13-deco page13-deco--flower" aria-hidden="true" />
        <span className="page13-deco page13-deco--dot" aria-hidden="true" />
        <span className="page13-deco page13-deco--dot2" aria-hidden="true" />

        <h2 className="page13-heading page13-words">We love you in your quirks</h2>

        <div className="page13-cols">
          <div className="page13-col page13-col--left">
            <figure className="page13-frame page13-frame--p">
              <img src={img53} alt="Memory 53" />
            </figure>
            <figure className="page13-frame page13-frame--p">
              <img src={img54} alt="Memory 54" />
            </figure>
            <figure className="page13-frame page13-frame--p">
              <img src={img55} alt="Memory 55" />
            </figure>
          </div>
          <div className="page13-col page13-col--mid">
            <figure className="page13-frame page13-frame--wide">
              <img src={img56} alt="Memory 56" />
            </figure>
            <figure className="page13-frame page13-frame--hero">
              <img src={img57} alt="Memory 57" />
            </figure>
            <figure className="page13-frame page13-frame--wide">
              <img src={img58} alt="Memory 58" />
            </figure>
          </div>
          <div className="page13-col page13-col--right">
            <figure className="page13-frame page13-frame--tall">
              <img src={img59} alt="Memory 59" />
            </figure>
            <figure className="page13-frame page13-frame--short">
              <img src={img60} alt="Memory 60" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

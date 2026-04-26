import img48 from "../images/48.png";
import img49 from "../images/49.png";
import img50 from "../images/50.png";
import img51 from "../images/51.png";
import img52 from "../images/52.png";

/** Book page 12 of 24 — 48–52 overlapping group collage */
export default function Page12() {
  return (
    <div className="book-page-inner book-page-inner--page12-gang">
      <h2 className="page12-title">School Times</h2>
      <div className="page12-collage" aria-label="Group photos">
        <span className="page12-deco page12-deco--star" aria-hidden="true" />
        <span className="page12-deco page12-deco--star page12-deco--s2" aria-hidden="true" />
        <span className="page12-deco page12-deco--star page12-deco--s3" aria-hidden="true" />
        <span className="page12-deco page12-deco--star page12-deco--s4" aria-hidden="true" />
        <span className="page12-deco page12-deco--star page12-deco--s5" aria-hidden="true" />

        <figure className="page12-frame page12-frame--tl">
          <img src={img48} alt="Memory 48" />
        </figure>
        <figure className="page12-frame page12-frame--tr">
          <img src={img49} alt="Memory 49" />
        </figure>
        <figure className="page12-frame page12-frame--c">
          <img src={img50} alt="Memory 50" />
        </figure>
        <figure className="page12-frame page12-frame--bl">
          <img src={img51} alt="Memory 51" />
        </figure>
        <figure className="page12-frame page12-frame--br">
          <img src={img52} alt="Memory 52" />
        </figure>
      </div>
    </div>
  );
}

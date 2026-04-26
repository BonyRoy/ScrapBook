import img80 from "../images/84.png";
import img81 from "../images/83.png";
import img82 from "../images/82.png";
import img83 from "../images/80.png";
import img84 from "../images/81.png";

/** Page 18 — 80–84, “FAM JAM” (portrait + wide + portrait, then 83 & 84) */
export default function Page18() {
  return (
    <div className="book-page-inner book-page-inner--page18-fam">
      <div className="page18-collage" aria-label="Fam jam">
        <span className="page18-flower page18-flower--tr" aria-hidden="true" />
        <span className="page18-flower page18-flower--bl" aria-hidden="true" />
        <span className="page18-dot page18-dot--1" aria-hidden="true" />
        <span className="page18-dot page18-dot--2" aria-hidden="true" />
        <span className="page18-star" aria-hidden="true" />
        <span className="page18-leaf" aria-hidden="true" />

        <h2 className="page18-title" lang="en">
          FAM JAM
        </h2>

        <div className="page18-trio">
          <figure className="page18-frame page18-frame--L">
            <img src={img80} alt="Memory 80" />
          </figure>
          <figure className="page18-frame page18-frame--C">
            <img src={img81} alt="Memory 81" />
          </figure>
          <figure className="page18-frame page18-frame--R">
            <img src={img82} alt="Memory 82" />
          </figure>
        </div>

        <div className="page18-trio page18-trio--duo">
          <figure className="page18-frame page18-frame--duoL">
            <img src={img83} alt="Memory 83" />
          </figure>
          <figure className="page18-frame page18-frame--duoR">
            <img src={img84} alt="Memory 84" />
          </figure>
        </div>
      </div>
    </div>
  );
}

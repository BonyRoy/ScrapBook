import img80 from "../images/80.png";
import img81 from "../images/81.png";
import img82 from "../images/82.png";

/** Book page 18 of 24 — 80–82, “FAM JAM” (portrait · wide landscape · portrait) */
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

        <h2 className="page18-title" lang="en">FAM JAM</h2>

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
      </div>
    </div>
  );
}

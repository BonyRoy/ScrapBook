import img77 from "../images/77.png";
import img78 from "../images/78.png";
import img79 from "../images/79.png";

/** Book page 17 of 24 — 77–79, “Love is in the air” (staggered portrait row) */
export default function Page17() {
  return (
    <div className="book-page-inner book-page-inner--page17-love">
      <div className="page17-collage" aria-label="Love is in the air">
        <span className="page17-flower page17-flower--tr" aria-hidden="true" />
        <span className="page17-flower page17-flower--bl" aria-hidden="true" />
        <span className="page17-dot page17-dot--1" aria-hidden="true" />
        <span className="page17-dot page17-dot--2" aria-hidden="true" />
        <span className="page17-dot page17-dot--3" aria-hidden="true" />
        <span className="page17-star" aria-hidden="true" />
        <span className="page17-leaf" aria-hidden="true" />

        <h2 className="page17-title">LOVE IS IN THE AIR</h2>

        <div className="page17-trio">
          <figure className="page17-frame page17-frame--L">
            <img src={img77} alt="Memory 77" />
          </figure>
          <figure className="page17-frame page17-frame--C">
            <img src={img78} alt="Memory 78" />
          </figure>
          <figure className="page17-frame page17-frame--R">
            <img src={img79} alt="Memory 79" />
          </figure>
        </div>
      </div>
    </div>
  );
}

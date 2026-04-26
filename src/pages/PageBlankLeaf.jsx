import img105 from "../images/105.png";
import img106 from "../images/106.png";
import img107 from "../images/107.png";
import img108 from "../images/108.png";
import img109 from "../images/109.png";
import img110 from "../images/110.png";

/** Page after FAM JAM — “Remember When…”, photos 105–110 */
export default function PageBlankLeaf() {
  return (
    <div className="book-page-inner book-page-inner--rw-collage">
      <div className="rw-shell" aria-label="Remember When collage">
        <span className="rw-tape rw-tape--tl" aria-hidden="true" />
        <span className="rw-tape rw-tape--tr" aria-hidden="true" />
        <span className="rw-doodle rw-doodle--s1" aria-hidden="true" />
        <span className="rw-doodle rw-doodle--s2" aria-hidden="true" />
        <span className="rw-doodle rw-doodle--s3" aria-hidden="true" />
        <span className="rw-doodle rw-doodle--s4" aria-hidden="true" />
        <span className="rw-star-burst" aria-hidden="true" />
        <span className="rw-floral rw-floral--1" aria-hidden="true" />
        <span className="rw-floral rw-floral--2" aria-hidden="true" />

        <div className="rw-title-row">
          <h2 className="rw-title">Remember When…</h2>
        </div>

        <div className="rw-grid">
          <div className="rw-col rw-col--left">
            <figure className="rw-frame rw-frame--land">
              <img src={img105} alt="Memory 105" />
            </figure>
            <figure className="rw-frame rw-frame--land">
              <img src={img106} alt="Memory 106" />
            </figure>
            <figure className="rw-frame rw-frame--land">
              <img src={img107} alt="Memory 107" />
            </figure>
          </div>

          <div className="rw-col rw-col--right">
            <figure className="rw-frame rw-frame--hero">
              <img src={img108} alt="Memory 108" />
            </figure>
            <p className="rw-caption">
              Cookie loves you and WE love you More
            </p>
            <div className="rw-pair">
              <figure className="rw-frame rw-frame--port">
                <img src={img109} alt="Memory 109" />
              </figure>
              <figure className="rw-frame rw-frame--port">
                <img src={img110} alt="Memory 110" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

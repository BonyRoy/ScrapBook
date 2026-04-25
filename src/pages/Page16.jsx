import img72 from "../images/72.png";
import img73 from "../images/73.png";
import img74 from "../images/74.png";
import img75 from "../images/75.png";
import img76 from "../images/76.png";

/** Book page 16 of 24 — 72–76, “Woh din bhi kya din the” */
export default function Page16() {
  return (
    <div className="book-page-inner book-page-inner--page16-din">
      <div className="page16-collage" aria-label="Woh din bhi kya din the">
        <span className="page16-burst page16-burst--tr" aria-hidden="true" />
        <span className="page16-burst page16-burst--bl" aria-hidden="true" />
        <span className="page16-dot page16-dot--1" aria-hidden="true" />
        <span className="page16-dot page16-dot--2" aria-hidden="true" />
        <span className="page16-dot page16-dot--3" aria-hidden="true" />
        <span className="page16-dot page16-dot--4" aria-hidden="true" />

        <h2 className="page16-title" lang="hi-Latn">
          WOH DIN BHI KYA DIN THE
        </h2>

        <div className="page16-mosaic">
          <figure className="page16-frame page16-frame--tall page16-rot-1">
            <img src={img72} alt="Memory 72" />
          </figure>
          <figure className="page16-frame page16-frame--land page16-rot-2">
            <img src={img73} alt="Memory 73" />
          </figure>
          <figure className="page16-frame page16-frame--port page16-rot-3">
            <img src={img74} alt="Memory 74" />
          </figure>
          <figure className="page16-frame page16-frame--land page16-rot-4">
            <img src={img75} alt="Memory 75" />
          </figure>
          <figure className="page16-frame page16-frame--land page16-rot-5">
            <img src={img76} alt="Memory 76" />
          </figure>
        </div>
      </div>
    </div>
  );
}

import img100 from "../images/100.png";
import img101 from "../images/101.png";
import img102 from "../images/102.png";
import img103 from "../images/103.png";
import img104 from "../images/104.png";

/** Book page after 17 — M♥P scrapbook: 100–104 (polaroid grid + taped portrait) */
export default function PageBlank() {
  return (
    <div className="book-page-inner book-page-inner--mp-scrapbook">
      <div className="mp-scrap-collage" aria-label="M hearts P, memories 100 to 104">
        <span className="mp-scrap-burst mp-scrap-burst--tr" aria-hidden="true" />
        <span className="mp-scrap-burst mp-scrap-burst--bl" aria-hidden="true" />
        <span className="mp-scrap-doodle-star mp-scrap-doodle-star--1" aria-hidden="true" />
        <span className="mp-scrap-doodle-star mp-scrap-doodle-star--2" aria-hidden="true" />
        <span className="mp-scrap-doodle-star mp-scrap-doodle-star--3" aria-hidden="true" />
        <span className="mp-scrap-arrow" aria-hidden="true" />
        <span className="mp-scrap-branch mp-scrap-branch--1" aria-hidden="true" />
        <span className="mp-scrap-branch mp-scrap-branch--2" aria-hidden="true" />

        <h2 className="mp-scrap-title">
          <span className="mp-scrap-title__letter">M</span>
          <span className="mp-scrap-hearts" aria-hidden="true">
            <span className="mp-scrap-heart-txt mp-scrap-heart-txt--lg">♥</span>
            <span className="mp-scrap-heart-txt mp-scrap-heart-txt--sm">♥</span>
          </span>
          <span className="mp-scrap-title__letter">P</span>
        </h2>

        <div className="mp-scrap-main">
          <div className="mp-scrap-polaroid-zone">
            <span className="mp-scrap-center-flower" aria-hidden="true" />
            <figure className="mp-scrap-polaroid mp-scrap-polaroid--tl">
              <img src={img100} alt="Memory 100" />
            </figure>
            <figure className="mp-scrap-polaroid mp-scrap-polaroid--tr">
              <img src={img101} alt="Memory 101" />
            </figure>
            <figure className="mp-scrap-polaroid mp-scrap-polaroid--bl">
              <img src={img102} alt="Memory 102" />
            </figure>
            <figure className="mp-scrap-polaroid mp-scrap-polaroid--br">
              <img src={img103} alt="Memory 103" />
            </figure>
          </div>

          <div className="mp-scrap-taped-wrap">
            <span className="mp-scrap-taped-paper" aria-hidden="true" />
            <span className="mp-scrap-washi" aria-hidden="true" />
            <figure className="mp-scrap-taped">
              <img src={img104} alt="Memory 104" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

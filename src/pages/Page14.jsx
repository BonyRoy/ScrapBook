import img61 from "../images/61.png";
import img62 from "../images/62.png";
import img63 from "../images/63.png";
import img64 from "../images/64.png";
import img65 from "../images/65.png";

/** Book page 14 of 24 — “The Trio” 61–65 scrapbook + captions */
export default function Page14() {
  return (
    <div className="book-page-inner book-page-inner--page14-trio">
      <div className="page14-collage" aria-label="The Trio">
        <span className="page14-deco page14-deco--flower" aria-hidden="true" />
        <span className="page14-deco page14-deco--spark" aria-hidden="true" />
        <span className="page14-deco page14-deco--spark page14-deco--s2" aria-hidden="true" />
        <span className="page14-deco page14-deco--spark page14-deco--s3" aria-hidden="true" />

        <h2 className="page14-trio">THE TRIO</h2>

        <figure className="page14-frame page14-frame--tc">
          <img src={img61} alt="Memory 61" />
        </figure>
        <figure className="page14-frame page14-frame--tr">
          <img src={img62} alt="Memory 62" />
        </figure>
        <figure className="page14-frame page14-frame--ml">
          <img src={img63} alt="Memory 63" />
        </figure>

        <p className="page14-baby">BABYGIRL</p>

        <figure className="page14-frame page14-frame--bc">
          <img src={img64} alt="Memory 64" />
        </figure>
        <figure className="page14-frame page14-frame--br">
          <img src={img65} alt="Memory 65" />
        </figure>

        <p className="page14-quote">
          We will always be gay for you cause you&apos;re our chammak challo
        </p>
        <p className="page14-vow">We vow to never stop flirting</p>
      </div>
    </div>
  );
}

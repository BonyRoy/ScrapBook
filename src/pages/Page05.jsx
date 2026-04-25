import ten from "../images/ten.png";
import eleven from "../images/eleven.png";
import twelve from "../images/twelve.png";
import thirteen from "../images/thirteen.png";
import fourteen from "../images/fourteen.png";
import fifteen from "../images/fifteen.png";
import sixteen from "../images/sixteen.png";
import seventeen from "../images/seventeen.png";

/** Book page 5 of 24 — 3×3 equal grid, center polaroid */
export default function Page05() {
  return (
    <div className="book-page-inner book-page-inner--squad-collage">
      <h2 className="squad-collage__title">Meet the Squad</h2>
      <div className="squad-collage" aria-label="Scrapbook photo collage">
        <span
          className="squad-collage__deco squad-collage__deco--clover"
          aria-hidden="true"
        />
        <span
          className="squad-collage__deco squad-collage__deco--floral"
          aria-hidden="true"
        />
        <span
          className="squad-collage__deco squad-collage__deco--star"
          aria-hidden="true"
        />

        <div className="squad-collage__grid">
          <img
            className="squad-collage__img squad-collage__img--tl"
            src={ten}
            alt="Meet the Squad, top left"
          />
          <div className="squad-collage__cell" aria-hidden="true" />
          <img
            className="squad-collage__img squad-collage__img--tr"
            src={thirteen}
            alt="Meet the Squad, top right"
          />
          <img
            className="squad-collage__img squad-collage__img--ml"
            src={eleven}
            alt="Meet the Squad, middle left"
          />
          <figure className="squad-collage__polaroid">
            <img src={fourteen} alt="Meet the Squad, center" />
            <figcaption>{"Just a bunch of goofy souls <3"}</figcaption>
          </figure>
          <img
            className="squad-collage__img squad-collage__img--mr"
            src={fifteen}
            alt="Meet the Squad, middle right"
          />
          <img
            className="squad-collage__img squad-collage__img--bl"
            src={twelve}
            alt="Meet the Squad, bottom left"
          />
          <img
            className="squad-collage__img squad-collage__img--bc"
            src={seventeen}
            alt="Meet the Squad, bottom center"
          />
          <img
            className="squad-collage__img squad-collage__img--br"
            src={sixteen}
            alt="Meet the Squad, bottom right"
          />
        </div>
      </div>
    </div>
  );
}

import eighteen from "../images/eighteen.png";
import ninteen from "../images/ninteen.png";

/** Book page 6 of 24 — staggered pair, “Our Favourite Human” */
export default function Page06() {
  return (
    <div className="book-page-inner book-page-inner--human-fave">
      <div className="human-scrap" aria-label="Our favourite human">
        <span className="human-scrap__deco human-scrap__deco--star-tr" aria-hidden="true" />
        <span className="human-scrap__deco human-scrap__deco--star-bl" aria-hidden="true" />
        <span className="human-scrap__deco human-scrap__deco--star-mid" aria-hidden="true" />
        <span className="human-scrap__deco human-scrap__deco--line" aria-hidden="true" />
        <span className="human-scrap__deco human-scrap__deco--clovers" aria-hidden="true" />
        <h2 className="human-scrap__title">Our Favourite Human</h2>
        <img
          className="human-scrap__img human-scrap__img--left"
          src={eighteen}
          alt="Our favourite human, one"
        />
        <img
          className="human-scrap__img human-scrap__img--right"
          src={ninteen}
          alt="Our favourite human, two"
        />
      </div>
    </div>
  );
}

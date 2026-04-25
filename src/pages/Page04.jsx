import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven.png";
import eight from "../images/eight.png";
import nine from "../images/nine.png";

/** Edit this list (3–9 items) — shared styling via .book-page-photos / .book-page-photos__img */
const PHOTOS = [
  { src: three, alt: "Chapter 3, photo 1" },
  { src: four, alt: "Chapter 3, photo 2" },
  { src: five, alt: "Chapter 3, photo 3" },
  { src: six, alt: "Chapter 3, photo 4" },
  { src: seven, alt: "Chapter 3, photo 5" },
  { src: eight, alt: "Chapter 3, photo 6" },
  { src: nine, alt: "Chapter 3, photo 7" },
];

const Page04 = () => (
  <div className="book-page-inner book-page-inner--photo-grid">
    <h2>Back then</h2>
    <div className="book-page-photos">
      {PHOTOS.map((photo, i) => (
        <img
          key={i}
          className="book-page-photos__img"
          src={photo.src}
          alt={photo.alt}
        />
      ))}
    </div>
  </div>
);

export default Page04;

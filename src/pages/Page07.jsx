import twenty from "../images/twenty.png";
import twentyone from "../images/twentyone.png";
import twentytwoo from "../images/twentytwoo.png";
import twentythree from "../images/twentythree.jpeg";
import twentyfour from "../images/twentyfour.jpeg";

function Paperclip() {
  return <span className="page7-polaroid__clip" aria-hidden="true" />;
}

const FRAMES = [
  { mod: "tl", src: twenty, alt: "Memory 20" },
  { mod: "tr", src: twentyone, alt: "Memory 21" },
  { mod: "c", src: twentytwoo, alt: "Memory 22" },
  { mod: "bl", src: twentythree, alt: "Memory 23" },
  { mod: "br", src: twentyfour, alt: "Memory 24" },
];

/** Book page 7 of 24 — five polaroid-style prints in a loose collage */
export default function Page07() {
  return (
    <div className="book-page-inner book-page-inner--page7-collage">
      <div className="page7-collage" aria-label="Five polaroid photos">
        <span className="page7-deco page7-deco--star page7-deco--s1" aria-hidden="true" />
        <span className="page7-deco page7-deco--star page7-deco--s2" aria-hidden="true" />
        <span className="page7-deco page7-deco--star page7-deco--s3" aria-hidden="true" />
        <span className="page7-deco page7-deco--leaf" aria-hidden="true" />
        <span className="page7-deco page7-deco--clover" aria-hidden="true" />
        {FRAMES.map((f) => (
          <figure
            key={f.mod}
            className={`page7-polaroid page7-polaroid--${f.mod}`}
          >
            <Paperclip />
            <img src={f.src} alt={f.alt} />
          </figure>
        ))}
      </div>
    </div>
  );
}

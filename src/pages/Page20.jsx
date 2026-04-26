const P20_ISHITA = `Dear Prema, Thank you for existing fr. I'm really grateful to have You in my life and I promise to always stick by your side. You truly have pure soul and i'd love to spoil it with more dirty talks, weird laughs and unconditional love.

~ Ishita`;

const P20_HARSH = `Always a vibe checker and the kid with whom I enjoy being a kid

~Harsh`;

const P20_PARTH = `Premashree, you have not only been there for me through every hilly road in life but have guided me in taking all the steps on that hilly road. There are very few people who get such true friends and i am sure i would have done something so so so good to have got you by my side. I am so thankful to have you, someone whom i can trust more than my blood!! Thankyou so so much for being part of my life! Wish you a very very very Happy Birthday 🥳✨🥰

~Parth`;

/** Page 20 — three-part note (Ishita, Harsh, Parth) on scrapbook tan + torn edges */
export default function Page20() {
  return (
    <div className="book-page-inner book-page-inner--p20-triple book-page-inner--note-letters">
      <div className="p20t-shell" aria-label="Messages from friends">
        <span className="p20t-burst p20t-burst--tr" aria-hidden="true" />
        <span className="p20t-burst p20t-burst--bl" aria-hidden="true" />
        <span className="p20t-star" aria-hidden="true" />
        <span className="p20t-star p20t-star--2" aria-hidden="true" />
        <span className="p20t-sprig" aria-hidden="true" />
        <span className="p20t-tape" aria-hidden="true" />
        <span className="p20t-tape p20t-tape--2" aria-hidden="true" />

        <div className="p20t-copy">
          <p className="p20t-line p20t-line--top">{P20_ISHITA}</p>
          <p className="p20t-line p20t-line--mid">{P20_HARSH}</p>
          <p className="p20t-line p20t-line--body">{P20_PARTH}</p>
        </div>
      </div>
    </div>
  );
}

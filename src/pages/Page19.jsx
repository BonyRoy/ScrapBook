/** Page 19 — birthday notes (Vedant + Arjun) */
const P19_VEDANT = `You are a beautiful soul..
You are the real funny lady..Happy Happy happiest birthday dear Prema❤️🥳. May god bless you✨✨✨

~Vedant`;

const P19_ARJUN = `Prema, Wish you a very very Happy Birthdayyy yrr ❤️❤️ Tere jesa dost milna bahut mushkil h aur sachme hum sb bahut lucky h ki we have you as our friend 😇😇 Honestly speaking, you are the person keeping humara pura group connected, active and lively 😇😇 Abhi bhi jab ek true friend ki baat ho ya ek dost ki yaad aaye toh humesha tera naam pehle uper aata h... Since u r always there for anyone of us... Tera ye chirpy aur happy face hi toh jaan fuk deta h group me 😆😆 Once again, a very very very Happiest Birthdayyyy Prema 🥳🥳🥳🎂🎂🎂🥂🥂🥂🎉🎉🎉🍟🍟🍟❤️ Wish you all the happiness in life you deserve and all the best for your future 💯💯💯 enjoy your day 😇

~Arjun`;

export default function Page19() {
  return (
    <div className="book-page-inner book-page-inner--p20-notes book-page-inner--note-letters">
      <div className="p20-shell" aria-label="Birthday messages from Vedant and Arjun">
        <span className="p20-deco p20-flower p20-flower--tr" aria-hidden="true" />
        <span className="p20-deco p20-flower p20-flower--bl" aria-hidden="true" />
        <span className="p20-deco p20-sprig" aria-hidden="true" />
        <span className="p20-deco p20-star" aria-hidden="true" />
        <span className="p20-deco p20-star p20-star--3" aria-hidden="true" />
        <span className="p20-deco p20-dot" aria-hidden="true" />

        <div className="p20-copy">
          <p className="p20-block p20-block--top">{P19_VEDANT}</p>
          <p className="p20-block p20-block--bottom">{P19_ARJUN}</p>
        </div>
      </div>
    </div>
  );
}

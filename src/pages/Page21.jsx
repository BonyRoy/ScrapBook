const P21_ISHA = `WE both know what all phases of friendship we have been through woh chaiye 1st standard ke thappad aur marne se leke 3rd standar ke silent treatment se leke 7th mein gaali dene ke baad 8th-9th mein finally you understanding me and we got through the toughest parts only to be there for each other NO MATTER WHAT! I might not say it out loud often but I'm grateful truly to have you in my life... You are the sibling I always wished to get Thank you for being the besttt Soul Sisterr everrr!

~Isha`;

const P21_MEHAK = `You are a weird little friend, who likes washing utensils 🧼, has major coffee addiction ☕ and most importantly is HIGH ALL THE DAMN TIME! "But however weird, I know that you will always be there and will go above and beyond for your loved ones! So here's to you, Happy 22! 💖 PS: now you are gonna be Happy, free, confused, and lonely at the same time ✨

~Mehak`;

/** Page 21 (last) — Isha + Mehak on tan scrapbook (Canva p22 style) */
export default function Page21() {
  return (
    <div className="book-page-inner book-page-inner--p22-ish book-page-inner--note-letters">
      <div className="p22-shell" aria-label="Messages from Isha and Mehak">
        <span className="p22-burst p22-burst--tr" aria-hidden="true" />
        <span className="p22-burst p22-burst--bl" aria-hidden="true" />
        <span className="p22-tape" aria-hidden="true" />
        <span className="p22-tape p22-tape--2" aria-hidden="true" />

        <div className="p22-copy">
          <p className="p22-body">{P21_ISHA}</p>
          <p className="p22-body p22-body--second">{P21_MEHAK}</p>
        </div>
      </div>
    </div>
  );
}

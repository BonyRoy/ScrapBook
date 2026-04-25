const P20_HARSH =
  "ek din 8th me… we were playing cricket… I was batting and Ishita was bowling to me. Maine ball hit kiya and ek pathar ko lagke Ishita ke muh pe lag gaya tha… I felt very sorry at that time… ki mere vajahe se lag gaye… but couldn't express…\n~ Harsh";

const P20_ARJUN =
  "Ek moment toh mujhe prema ke bday ka yaad aa rha h where we all enjoyed at her home… Another of your bday at your home when we all created handmade gifts for you Aur hum imagica jab gye the uski memories hai… Bachpan me class me jo masti krte the vo toh h hi ofc but koi specific esa moment dhyan nhi aa rha usme… Aata h toh bta dunga\n~ Arjun";

/** Page 20 — two diagonally offset text blocks (notes from friends) */
export default function Page20() {
  return (
    <div className="book-page-inner book-page-inner--p20-notes">
      <div className="p20-shell" aria-label="Notes from Harsh and Arjun">
        <span className="p20-deco p20-flower p20-flower--tr" aria-hidden="true" />
        <span className="p20-deco p20-flower p20-flower--bl" aria-hidden="true" />
        <span className="p20-deco p20-sprig" aria-hidden="true" />
        <span className="p20-deco p20-star" aria-hidden="true" />
        <span className="p20-deco p20-star p20-star--2" aria-hidden="true" />
        <span className="p20-deco p20-star p20-star--3" aria-hidden="true" />
        <span className="p20-deco p20-dot" aria-hidden="true" />
        <span className="p20-deco p20-dot p20-dot--2" aria-hidden="true" />

        <p className="p20-block p20-block--top">{P20_HARSH}</p>
        <p className="p20-block p20-block--bottom">{P20_ARJUN}</p>
      </div>
    </div>
  );
}

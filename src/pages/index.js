import Page01 from "./Page01.jsx";
import PageImage111 from "./PageImage111.jsx";
import { wrapPageWithSvgDecor } from "./wrapPageWithSvgDecor.jsx";
import Page02 from "./Page02.jsx";
import Page03 from "./Page03.jsx";
import Page04 from "./Page04.jsx";
import Page05 from "./Page05.jsx";
import Page06 from "./Page06.jsx";
import Page07 from "./Page07.jsx";
import Page08 from "./Page08.jsx";
import Page09 from "./Page09.jsx";
import Page10 from "./Page10.jsx";
import Page11 from "./Page11.jsx";
import Page12 from "./Page12.jsx";
import Page13 from "./Page13.jsx";
import Page14 from "./Page14.jsx";
import Page15 from "./Page15.jsx";
import Page16 from "./Page16.jsx";
import Page17 from "./Page17.jsx";
import PageBlank from "./PageBlank.jsx";
import Page18 from "./Page18.jsx";
import Page19 from "./Page19.jsx";
import PageBlankLeaf from "./PageBlankLeaf.jsx";
import Page20 from "./Page20.jsx";
import Page21 from "./Page21.jsx";

const w = wrapPageWithSvgDecor;

/**
 * Book pages, each implemented in its own file under src/pages/
 */
export const BOOK_PAGES = [
  { id: "page-01", Component: w(Page01) },
  { id: "page-02", Component: w(PageImage111) },
  { id: "page-03", Component: w(Page02) },
  { id: "page-04", Component: w(Page03) },
  { id: "page-05", Component: w(Page04) },
  { id: "page-06", Component: w(Page05) },
  { id: "page-07", Component: w(Page06) },
  { id: "page-08", Component: w(Page07) },
  { id: "page-09", Component: w(Page08) },
  { id: "page-10", Component: w(Page09) },
  { id: "page-11", Component: w(Page10) },
  { id: "page-12", Component: w(Page11) },
  { id: "page-13", Component: w(Page12) },
  { id: "page-14", Component: w(Page13) },
  { id: "page-15", Component: w(Page14) },
  { id: "page-16", Component: w(Page15) },
  { id: "page-17", Component: w(Page16) },
  { id: "page-18", Component: w(Page17) },
  { id: "page-19", Component: w(PageBlank) },
  { id: "page-20", Component: w(Page18) },
  { id: "page-21", Component: w(PageBlankLeaf) },
  { id: "page-22", Component: w(Page19) },
  { id: "page-23", Component: w(Page20) },
  { id: "page-24", Component: w(Page21) },
];

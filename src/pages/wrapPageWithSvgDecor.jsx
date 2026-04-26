import React from "react";
import BookPageSvgDecor from "../BookPageSvgDecor.jsx";

/** Prepend SVG stars/flowers inside each page root (first child of .book-page-inner). */
export function wrapPageWithSvgDecor(Page) {
  return function PageWithSvgDecor(props) {
    const el = Page(props);
    if (!React.isValidElement(el)) return el;
    return React.cloneElement(el, {
      children: (
        <>
          <BookPageSvgDecor />
          {el.props.children}
        </>
      ),
    });
  };
}

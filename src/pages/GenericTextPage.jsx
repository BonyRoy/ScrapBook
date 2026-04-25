/**
 * Reusable text page; each numbered page in its own file still composes this for consistency.
 */
export default function GenericTextPage({ title, text }) {
  return (
    <div className="book-page-inner">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

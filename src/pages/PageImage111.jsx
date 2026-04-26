import img111 from "../images/111.png";

/** Single spread — image 111 only (uses full content width) */
export default function PageImage111() {
  return (
    <div className="book-page-inner book-page-inner--single-111">
      <img src={img111} alt="Memory 111" />
    </div>
  );
}

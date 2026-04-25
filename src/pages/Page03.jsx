import image from "../images/two.png";
const Page03 = () => (
  <div className="book-page-inner">
    <h2>The One Where It AlL Began</h2>
    <img
      src={image}
      alt="My Peps"
      style={{
        height: "300px",
        width: "auto !important",
        padding: 10,
        backgroundColor: "white",
      }}
    />
    <p>We all have that one friend who never learned how to whisper</p>
  </div>
);

export default Page03;

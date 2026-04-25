import image from "../images/two.png";
const Page03 = () => (
  <div className="book-page-inner">
    <h2>The One Where It AlL Began</h2>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <img
        src={image}
        alt="My Peeps"
        style={{
          height: "auto",
          width: "150px",
          padding: 10,
          backgroundColor: "white",
        }}
      />
      <p>We all have that one friend who never learned how to whisper</p>
    </div>
  </div>
);

export default Page03;

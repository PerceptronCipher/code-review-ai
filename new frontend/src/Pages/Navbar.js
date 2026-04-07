import q from "../images/Q&A Ss.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={q} />
      </div>
      <div className="nav-links">
        <a href="#how-it-works">Features</a>

        <a href="#hero">Docs</a>
        <a href="#contact">Privacy</a>
      </div>
      <div className="nav-btn">
        <button>
          <a href="#review">Upload Docs</a>
        </button>
      </div>
    </div>
  );
}
export default Navbar;

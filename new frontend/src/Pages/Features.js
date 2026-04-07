import star from "../images/Star 1.png";

function Features() {
  return (
    <div className="how" id="how-it-works">
      <div className="howHeading">Features</div>
      <div className="howList">
        <div className="hl">
          <img src={star} />
          <li> Paste code directly into the editor for instant review</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li>Upload code files for automated analysis</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> AI-powered feedback using OpenAI GPT-4o</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> Review history — track past submissions in session</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> Rate limiting — 10 requests/minute to prevent abuse</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> CORS-enabled for seamless frontend-backend communication</li>
        </div>
      </div>

      <div className="howline"></div>
    </div>
  );
}
export default Features;

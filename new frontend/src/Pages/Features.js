import star from "../images/Star 1.png";

function Features() {
  const featuresList = [
    "Paste code directly into the editor for instant review",
    "Upload code files for automated analysis",
    "AI-powered feedback using OpenAI GPT-4o",
    "Review history — track past submissions in session",
    "Rate limiting — 10 requests/minute to prevent abuse",
    "CORS-enabled for seamless frontend-backend communication",
  ];

  return (
    <div className="how" id="how-it-works">
      <div className="howHeading">Features</div>

      <ul className="howList">
        {featuresList.map((feature, index) => (
          <li key={index} className="hl">
            <img src={star} alt="star" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;

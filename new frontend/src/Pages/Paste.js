import { useState } from "react";

const BACKEND_URL = "https://api-code-review.buildoninc.org";

function Paste() {
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("English");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!code && !file) {
      setError("Please provide code or upload a file");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const formData = new FormData();
    if (code) formData.append("code", code);
    if (file) formData.append("file", file);
    formData.append("language", language);

    setLoading(true);
    setReview(null);

    try {
      const res = await fetch(`${BACKEND_URL}/review`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setReview(data);
    } catch (err) {
      console.error(err);
      setError("Error reviewing code");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="paste" id="review">
      <h1>Paste or Upload Your Code</h1>

      {error && <div className="review-error">{error}</div>}

      <textarea
        placeholder="Paste your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <div style={{ margin: "20px 0" }}>
        <label className="upload-btn">
          Upload Code File
          <input type="file" onChange={handleFileChange} hidden />
        </label>
        {file && <p style={{ marginTop: "10px" }}>Selected: {file.name}</p>}
      </div>

      <div className="language-options" style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "10px" }}>Language</p>
        <div className="lang-buttons">
          {["English", "Spanish", "French", "German"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={language === lang ? "lang-active" : "lang-btn"}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} disabled={loading} className="b3">
        {loading ? "Reviewing..." : "Upload & Review"}
      </button>

      {review && (
        <div className="review-box">
          <h2>Review Result</h2>

          {review.bugs && review.bugs.length > 0 && (
            <div className="review-section bugs">
              <h3>Bugs</h3>
              <ul>
                {review.bugs.map((bug, idx) => (
                  <li key={idx}>{bug}</li>
                ))}
              </ul>
            </div>
          )}

          {review.security && review.security.length > 0 && (
            <div className="review-section security">
              <h3>Security</h3>
              <ul>
                {review.security.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {review.performance && review.performance.length > 0 && (
            <div className="review-section performance">
              <h3>Performance</h3>
              <ul>
                {review.performance.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {review.refactored_code && (
            <div className="review-section refactor">
              <h3>Refactored Code</h3>
              <pre>{review.refactored_code}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Paste;

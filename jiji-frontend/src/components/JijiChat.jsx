import { useState } from "react";
import { askJiji } from "../api/jijiApi";

function JijiChat() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    const data = await askJiji(query);
    setAnswer(data.answer);
    setResources(data.resources);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Jiji – Your AI Friend</h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleAsk}>
        {loading ? "Thinking..." : "Ask Jiji"}
      </button>

      {answer && (
        <div className="response">
          <h3>Jiji says:</h3>
          <p>{answer}</p>

          <h4>Resources:</h4>
          <ul>
            {resources.map((res, index) => (
              <li key={index}>
                {res.type === "ppt" && (
  <a href={res.file_url} target="_blank" download>
    📄 Download PPT
  </a>
)}

{res.type === "video" && (
  <a href={res.file_url} target="_blank">
    🎥 Watch Video
  </a>
)}

              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default JijiChat;

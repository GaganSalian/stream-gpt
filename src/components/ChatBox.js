// src/components/ChatBox.js
import React, { useState } from "react";

const ChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!prompt) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    if (data.reply) {
      setResponse(data.reply);
    } else {
      setResponse("Error: " + (data.error || "No response"));
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="border p-2 w-full"
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Send
      </button>
      <div className="mt-4 p-2 bg-gray-100 border rounded">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatBox;

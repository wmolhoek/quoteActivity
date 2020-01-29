import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetch(process.env.REACT_APP_BACK_END_URL)
      .then(res => res.json())
      .then(res => setQuote(res));
  }, []);
  return (
    <div className="App">
      <button
        className="Button"
        onClick={() =>
          fetch(process.env.REACT_APP_BACK_END_URL)
            .then(res => res.json())
            .then(res => setQuote(res))
        }
      >
      New Quote
      </button>
      <h2>{quote.text}</h2>
      <h4>{quote.author}</h4>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/v1/quotes`)
      .then(async (response) => response.json())
      .then(({ data }) => {
        setQuotes(data);
      });
  }, []);

  return (
    <>
      <div>
        {quotes.length ? (
          <p>{JSON.stringify(quotes, null, 2)}</p>
        ) : (
          <h1>Empty quotes</h1>
        )}
      </div>
    </>
  );
}

export default App;

import React from "react";
import { getQuotes } from "../services";

export const MainPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    // if (quotes.length === 0) {
    getQuotes(3)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((e) => {
        setQuotes([{ quote: "Error: fetching gone wrong" }]);
      })
      .finally(() => setIsLoading(false));
    // }
  }, []);

  return (
    <>
      <h1>Simpsons quotes</h1>
      {isLoading && <p>Loading...</p>}

      <ul>
        {quotes.map(({ quote, image, character }) => (
          <li key={quote}>
            {quote}
            <img src={image} alt="characterImg" data-test-id="characterImg" />
          </li>
        ))}
      </ul>
    </>
  );
};

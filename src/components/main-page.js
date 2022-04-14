import React from "react";

const getQuotes = () => fetch("/quotes");

export const MainPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    getQuotes()
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Simpsons quotes</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {quotes.map(({ quote }) => (
          <li key={quote}>{quote}</li>
        ))}
      </ul>
    </>
  );
};

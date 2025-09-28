import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_QUOTE_API_KEY;

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      const data = await response.json();
      setQuote(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full bg-green-200 min-h-1/2 px-20 py-10 shadow-2xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center">Random Quote Generator</h1>
      {!loading ? (
        <div className="flex flex-col items-center text-center justify-center gap-3 py-5">
          <p className="font-semibold text-2xl w-2/3">"{quote?.quote}"</p>
          <p className="text-xl text-gray-600">{quote?.author}</p>
        </div>
      ) : (
        <p className="text-2xl font-semibold">Loading...</p>
      )}
      <button
        onClick={getQuote}
        className="bg-green-300 px-20 py-2 w-1/4 rounded shadow-2xl cursor-pointer hover:bg-green-400 duration-200"
      >
        {loading ? "Loading..." : "GET A QUOTE"}
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;

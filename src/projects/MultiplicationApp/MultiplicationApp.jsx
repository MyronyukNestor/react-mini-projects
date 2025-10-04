import { useEffect, useState } from "react";

const MultiplicationApp = () => {
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const randomNums = () => {
    setNum1(Math.ceil(Math.random() * 10));
    setNum2(Math.ceil(Math.random() * 10));
  };

  const answer = num1 * num2;

  const checkAnswer = (e) => {
    e.preventDefault();

    if (answer === +userAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    randomNums();
    setUserAnswer("");
  };

  useEffect(() => {
    randomNums();
  }, []);

  return (
    <form
      onSubmit={checkAnswer}
      className="w-lg shadow-2xl px-7 py-8 bg-white rounded-lg flex flex-col gap-5"
    >
      <p className="text-right text-lg font-bold text-green-700">
        score: {score}
      </p>
      <h1 className="text-3xl font-bold text-center">
        What is {num1} multiply by {num2}?
      </h1>
      <input
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="border-4 text-center text-green-700 py-3 text-3xl items-center border-green-700"
        type="number"
        placeholder="Enter your answer"
      />
      <button
        type="submit"
        className="text-white bg-green-700 py-3 rounded hover:bg-green-800 duration-150 cursor-pointer text-xl font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default MultiplicationApp;

import { useState } from "react";
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const playRound = (choice) => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    const compChoice = choices[randomChoice];

    setComputerChoice(compChoice);
    setUserChoice(choice);

    if (choice === compChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === "rock" && compChoice === "scissors") ||
      (choice === "paper" && compChoice === "rock") ||
      (choice === "scissors" && compChoice === "paper")
    ) {
      setResult(`You win! ${choice} beats ${compChoice}`);
      setUserScore((prevScore) => prevScore + 1);
    } else {
      setResult(`You lose! ${compChoice} beats ${choice}`);
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const reset = () => {
    setUserChoice("");
    setComputerChoice("");
    setUserScore(0);
    setComputerScore(0);
    setResult("");
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold text-center">
        Rock Paper Scissors Game
      </h1>
      <p className="text-center text-3xl font-semibold">Choose your move:</p>
      <div className="flex justify-center gap-5">
        <span
          onClick={() => playRound("rock")}
          className="text-7xl p-5 bg-red-500 hover:bg-red-600 duration-200 rounded-xl cursor-pointer"
        >
          <FaRegHandRock />
        </span>
        <span
          onClick={() => playRound("paper")}
          className="text-7xl p-5 bg-blue-500 hover:bg-blue-600 duration-200 rounded-xl cursor-pointer"
        >
          <FaRegHandPaper />
        </span>
        <span
          onClick={() => playRound("scissors")}
          className="text-7xl p-5 bg-green-500 hover:bg-green-600 duration-200 rounded-xl cursor-pointer"
        >
          <FaRegHandScissors />
        </span>
      </div>
      {result && <p className="text-center font-bold text-2xl">{result}</p>}
      <p className="text-center font-bold text-2xl">
        Your score: <span className="text-blue-500">{userScore}</span> Computer
        score: <span className="text-red-500">{computerScore}</span>
      </p>

      <div className="flex justify-center">
        <button
          onClick={reset}
          className="px-6 py-2 text-2xl rounded-2xl text-white duration-200 bg-cyan-600 hover:bg-cyan-700 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;

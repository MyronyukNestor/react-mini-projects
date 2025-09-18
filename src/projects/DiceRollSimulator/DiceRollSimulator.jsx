import { useState } from "react";
import { motion } from "framer-motion";
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

const diceMap = {
  1: <GiInvertedDice1 />,
  2: <GiInvertedDice2 />,
  3: <GiInvertedDice3 />,
  4: <GiInvertedDice4 />,
  5: <GiInvertedDice5 />,
  6: <GiInvertedDice6 />,
};

const DiceRollSimulator = () => {
  const [dice, setDice] = useState(<GiInvertedDice1 />);
  const [rollHistory, setRollHistory] = useState([]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    setTimeout(() => {
      const randomRoll = Math.floor(Math.random() * 6) + 1;
      setDice(diceMap[randomRoll]);
      setRollHistory((prevDice) => [...prevDice, diceMap[randomRoll]]);
      setIsRolling(false);
    }, 600);
  };

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold text-center">Dice Roll Simulator</h1>
      <motion.span
        className="text-8xl flex justify-center py-10"
        animate={
          isRolling
            ? { rotate: [0, 20, -20, 20, -20, 0], scale: [1, 1.2, 1] }
            : { rotate: 0, scale: 1 }
        }
        transition={{ duration: 0.6 }}
      >
        {dice}
      </motion.span>

      <div className="flex justify-center">
        <button
          onClick={rollDice}
          disabled={isRolling}
          className={`px-8 py-4 text-2xl rounded-2xl text-white duration-200 ${
            isRolling
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-600 hover:bg-cyan-700 cursor-pointer"
          }`}
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>

      <ul className="max-w-xl flex flex-col gap-3 mt-7 mx-auto">
        {rollHistory.map((el, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between text-2xl bg-gray-200 p-6 rounded-2xl"
          >
            Roll {idx + 1}: <span className="text-5xl">{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiceRollSimulator;

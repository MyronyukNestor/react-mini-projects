import { useState } from "react";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "Do you accept all major credit cards?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio alias rem laudantium recusandae iure sed.",
  },
  {
    id: 2,
    question: "Do you support local farmers?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio alias rem laudantium recusandae iure sed.",
  },
  {
    id: 3,
    question: "Do you use organic ingredients?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio alias rem laudantium recusandae iure sed.",
  },
];

const QASection = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setOpenAnswer(openAnswer === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-6">
      {questions.map((item) => (
        <div
          key={item.id}
          className="max-w-2xl bg-white rounded-xl shadow-lg px-8 py-9"
        >
          <div className="flex items-center justify-between">
            <h2 className="capitalize font-semibold text-lg text-lime-600">
              {item.question}
            </h2>
            <span
              onClick={() => toggleAnswer(item.id)}
              className="text-lime-600 text-2xl cursor-pointer"
            >
              {openAnswer === item.id ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openAnswer === item.id ? "max-h-40 mt-4" : "max-h-0"
            }`}
          >
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-500">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QASection;

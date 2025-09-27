import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useState } from "react";

const StepProgressBar = () => {
  const steps = ["Start", "Step 1", "Step 2", "Step 3", "Final"];

  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-15">
      <div className="flex items-center">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center">
              <div
                className={`rounded-full p-3 bg-white border-4 border-gray-200 ${
                  currentStep >= idx &&
                  "border-green-800 transition-colors duration-800"
                }`}
              >
                <span className="text-2xl text-green-800">
                  {currentStep >= idx ? <FaCheck /> : <RxCross2 />}
                </span>
              </div>
              {idx !== steps.length - 1 && (
                <hr
                  className={`h-1 w-30 bg-gray-200 border-none transition-colors duration-800 ${
                    currentStep > idx && "bg-green-800"
                  } `}
                />
              )}
            </div>
            <p className="text-green-800 text-xl font-semibold">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-purple-700 rounded text-white text-2xl cursor-pointer hover:bg-purple-800 duration-200"
        >
          <GrLinkPrevious />
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-purple-700 rounded text-white text-2xl cursor-pointer hover:bg-purple-800 duration-200"
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default StepProgressBar;

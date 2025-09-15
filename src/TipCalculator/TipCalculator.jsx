import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tips, setTips] = useState("");
  const [total, setTotal] = useState(null);

  const calculateTips = (e) => {
    e.preventDefault();
    setTotal(+bill * (1 + +tips / 100));
    setBill("");
    setTips("");
  };

  return (
    <div className="w-1/3 p-6 rounded-2xl bg-white shadow-xl">
      <form className="flex flex-col gap-3" onSubmit={calculateTips}>
        <h1 className=" text-center text-3xl font-bold">Tip Calculator</h1>
        <p>Enter the bill amount and tip percentage to calculate the total.</p>
        <label className="flex flex-col gap-2" htmlFor="bill">
          Bill amount:
          <input
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="border border-gray-300 h-8 px-3"
            type="number"
            name="bill"
            id="bill"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="percentage">
          Tip percentage:
          <input
            value={tips}
            onChange={(e) => setTips(e.target.value)}
            className="border border-gray-300 h-8 px-3"
            type="number"
            name="percentage"
            id="percentage"
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-green-600 hover:bg-green-700 h-10 text-white text-xl cursor-pointer duration-200"
        >
          CALCULATE
        </button>
      </form>
      <p className="mt-3">
        Total: <span className="font-bold">{total && total.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default TipCalculator;

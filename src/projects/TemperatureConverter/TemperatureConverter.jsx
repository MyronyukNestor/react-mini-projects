import { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const convert = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (value === "" || value === "-") {
      setCelsius("");
      setFahrenheit("");
      setKelvin("");
      return;
    }

    const numValue = parseFloat(value);

    if (name === "celsius") {
      setCelsius(value);
      setFahrenheit(((numValue * 9) / 5 + 32).toFixed(2));
      setKelvin((numValue + 273.15).toFixed(2));
    } else if (name === "fahrenheit") {
      setFahrenheit(value);
      setCelsius((((numValue - 32) * 5) / 9).toFixed(2));
      setKelvin((((numValue - 32) * 5) / 9 + 273.15).toFixed(2));
    } else if (name === "kelvin") {
      setKelvin(value);
      setCelsius((numValue - 273.15).toFixed(2));
      setFahrenheit((((numValue - 273.15) * 9) / 5 + 32).toFixed(2));
    }
  };

  return (
    <div className="w-1/4 rounded-2xl bg-emerald-100 shadow-xl p-10">
      <form className="flex flex-col gap-3">
        <h1 className=" text-center text-3xl font-bold text-emerald-600 mb-5">
          Temperature Converter
        </h1>
        <label
          className="flex justify-between gap-2 text-emerald-600 font-semibold"
          htmlFor="Celsius"
        >
          Celsius:
          <input
            value={celsius}
            onChange={convert}
            className="border border-gray-300 h-8 px-3"
            type="number"
            name="celsius"
            id="celsius"
            step="any"
          />
        </label>
        <label
          className="flex justify-between gap-2 text-emerald-600 font-semibold"
          htmlFor="Fahrenheit"
        >
          Fahrenheit:
          <input
            value={fahrenheit}
            onChange={convert}
            className="border border-gray-300 h-8 px-3"
            type="number"
            name="fahrenheit"
            id="fahrenheit"
            step="any"
          />
        </label>
        <label
          className="flex justify-between gap-2 text-emerald-600 font-semibold"
          htmlFor="Kelvin"
        >
          Kelvin:
          <input
            value={kelvin}
            onChange={convert}
            className="border border-gray-300 h-8 px-3"
            type="number"
            name="kelvin"
            id="kelvin"
            step="any"
          />
        </label>
      </form>
    </div>
  );
};

export default TemperatureConverter;

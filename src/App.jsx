import TemperatureConverter from "./TemperatureConverter/TemperatureConverter";
import TipCalculator from "./TipCalculator/TipCalculator";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <TipCalculator />
      </div>
      <div className="h-screen flex justify-center items-center bg-emerald-600">
        <TemperatureConverter />
      </div>
    </div>
  );
};

export default App;

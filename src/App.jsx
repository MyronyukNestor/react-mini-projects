import TemperatureConverter from "./TemperatureConverter/TemperatureConverter";
import TipCalculator from "./TipCalculator/TipCalculator";

const App = () => {
  return (
    <div className="py-20 flex flex-col gap-100 justify-center items-center bg-[#f2f2f2] h-screen">
      <TipCalculator />
      {/* <TemperatureConverter /> */}
    </div>
  );
};

export default App;

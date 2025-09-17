import AgeCalculator from "./projects/AgeCalculator/AgeCalculator";
import RecipeBook from "./projects/RecipeBook/RecipeBook";
import TemperatureConverter from "./projects/TemperatureConverter/TemperatureConverter";
import TestimonialSlider from "./projects/TestimonialSlider/TestimonialSlider";
import TipCalculator from "./projects/TipCalculator/TipCalculator";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <TipCalculator />
      </div>
      <div className="h-screen flex justify-center items-center bg-emerald-600">
        <TemperatureConverter />
      </div>
      <div className="h-screen flex justify-center items-center bg-purple-200">
        <TestimonialSlider />
      </div>
      <div className="h-screen flex justify-center items-center bg-gray-300">
        <AgeCalculator />
      </div>
      <div className="">
        <RecipeBook />
      </div>
    </div>
  );
};

export default App;

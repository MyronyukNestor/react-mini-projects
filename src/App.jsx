import AgeCalculator from "./projects/AgeCalculator/AgeCalculator";
import DiceRollSimulator from "./projects/DiceRollSimulator/DiceRollSimulator";
import RecipeBook from "./projects/RecipeBook/RecipeBook";
import RockPaperScissors from "./projects/RockPaperScissors/RockPaperScissors";
import TabsSection from "./projects/TabsSection/TabsSection";
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
      <div>
        <RecipeBook />
      </div>
      <div className="min-h-screen flex justify-center bg-gray-300">
        <DiceRollSimulator />
      </div>
      <div className="h-screen flex justify-center items-center bg-indigo-200">
        <RockPaperScissors />
      </div>
      <div className="h-screen flex justify-center items-center bg-pink-300">
        <TabsSection />
      </div>
    </div>
  );
};

export default App;

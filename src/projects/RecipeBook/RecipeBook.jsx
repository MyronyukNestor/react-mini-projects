import { div, h1 } from "framer-motion/client";
import { useEffect, useState } from "react";

const API_KEY = "275d58779ccf4e22af03e792e8819fff";

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);
  const [moreRecipes, setMoreRecipes] = useState(5);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`
        );

        if (!response.ok) {
          setError(true);
          throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="bg-gray-700">
      <h1 className="text-center py-8 font-bold text-4xl text-white bg-[#0C2461]">
        Recipe Book App
      </h1>
      {error ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-white text-center text-6xl ">
            Something wrong with API :(
          </h1>
        </div>
      ) : (
        <div className="px-10 py-6 flex flex-col justify-center max-w-7xl mx-auto ">
          {recipes.slice(0, moreRecipes).map((recipe) => (
            <div
              key={recipe.id}
              className="py-5 shadow-lg flex items-center justify-between bg-gray-200 rounded-lg p-4 mb-4 hover:bg-gray-300 transition duration-200"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-32 w-32 object-cover rounded-lg"
              />
              <p className="text-lg font-medium w-1/3 text-center">
                {recipe.title}
              </p>
              <span className="w-1/3">
                <p className="font-semibold">Ingredients:</p>
                <p className="text-sm text-gray-700">
                  {recipe.extendedIngredients
                    .map((ingredient) => ingredient.name)
                    .join(", ")}
                </p>
              </span>
              <a
                href={recipe.sourceUrl}
                target="_blank"
                className="text-blue-500 hover:text-blue-700 font-semibold underline duration-100"
              >
                VIEW RECIPE
              </a>
            </div>
          ))}

          <div className="flex justify-center py-5">
            <button
              onClick={() => setMoreRecipes(moreRecipes + 5)}
              className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-xl cursor-pointer duration-150"
            >
              Show More Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeBook;

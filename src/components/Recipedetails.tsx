import { Clock } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Recipe from "../assets/images/Burger.png";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetails } from "../service/api";
export const RecipeDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const recipe = location.state?.recipe;
  const [fallbackRecipe, setFallbackRecipe] = useState(null);

useEffect(() => {
  if (!recipe && id) {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeDetails(id);
        setFallbackRecipe(data);
      } catch (err) {
        console.error("Error fetching fallback recipe:", err);
      }
    };
    fetchRecipe();
  }
}, [id, recipe]);

 const displayRecipe = recipe || fallbackRecipe;

  if (!displayRecipe) return <p>Loading recipe...</p>;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 font-sans">
        <div className=" gap-6">
          <div className="space-y-6">
            <div className="flex md:justify-between md:flex-row flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  ">
                 {displayRecipe.title}
                </h1>

                <div className="flex items-center mt-2 text-base text-gray-600">
                  <Clock className="w-8 h-8 mr-1" />
                  <span> Ready in: {displayRecipe.readyInMinutes} minutes </span>
                  <span className="mx-2">•</span>
                  <span>Difficulty: easy</span>
                </div>

                <p className="mt-4 italic text-2xl text-gray-800 font-bold">
                    Servings: {displayRecipe.servings}
                </p>
              </div>
              <img src={Recipe} alt="img" className="w-[463px] h-[392px]" />
              <div></div>
    
            </div>

            <div>
              <h2 className="font-bold text-gray-900 uppercase text-sm mb-2">
                Ingredients
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>1 cup all-purpose flour</li>
                <li>2 tablespoons granulated sugar</li>
                <li>1 teaspoon baking powder</li>
                <li>1/2 teaspoon baking soda</li>
                <li>1/4 teaspoon salt</li>
                <li>3/4 cup buttermilk</li>
                <li>1/4 cup milk</li>
                <li>2 tablespoons unsalted butter, melted</li>
                <li>1 large egg</li>
                <li>1 teaspoon vanilla extract</li>
                <li>1 cup fresh blueberries</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-gray-900 uppercase text-sm mb-2">
                Instructions
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  In a large mixing bowl, whisk together the flour, sugar,
                  baking powder, baking soda, and salt.
                </li>
                <li>
                  In a separate bowl, whisk the buttermilk, milk, melted butter,
                  egg, and vanilla extract until well combined.
                </li>
                <li>
                  Pour the wet ingredients into the dry ingredients and stir
                  gently until just combined. It's okay if there are a few
                  lumps; do not overmix.
                </li>
                <li>Gently fold in the fresh blueberries into the batter.</li>
                <li>
                  Preheat your waffle iron and lightly grease it with cooking
                  spray or melted butter.
                </li>
                <li>
                  Ladle the waffle batter onto the preheated waffle iron, making
                  sure not to overfill it.
                </li>
                <li>
                  Close the waffle iron and cook the waffle until it's golden
                  brown and crispy.
                </li>
                <li>
                  Remove the waffle carefully from the iron and place it on a
                  plate. Repeat the process with the remaining batter.
                </li>
                <li>
                  Serve the delicious blueberry waffles warm, topped with maple
                  syrup, additional blueberries, and a dusting of powdered
                  sugar, if desired.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

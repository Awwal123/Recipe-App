import { Clock } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Recipe from "../assets/images/Burger.png";
export const RecipeDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 font-sans bg-blue-200 ">
        <div className=" gap-6">
          <div className="space-y-6">
            <div className="flex md:justify-between md:flex-row flex-col">
              <div>
                <h1 className="text-2xl font-bold text-red-600">
                  BlueBerry waffle
                </h1>
                <p className="text-gray-700">by scott</p>

                <div className="flex items-center mt-2 text-base text-gray-600">
                  <Clock className="w-8 h-8 mr-1" />
                  <span>15-20 min</span>
                  <span className="mx-2">•</span>
                  <span>Difficulty: easy</span>
                </div>

                <p className="mt-4 italic text-2xl text-gray-800 font-bold">
                  "Indulge in fluffy, golden waffles infused with bursts of
                  juicy blueberries."
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

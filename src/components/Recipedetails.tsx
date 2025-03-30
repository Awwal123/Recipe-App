import { Clock, Play } from "lucide-react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
export const RecipeDetails = () => {
  return (
    <div>
      <Navbar />
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-red-600">BlueBerry waffle</h1>
            <p className="text-gray-700">by scott</p>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>15-20 min</span>
              <span className="mx-2">•</span>
              <span>Difficulty: easy</span>
            </div>

            <p className="mt-4 italic text-gray-800">
              "Indulge in fluffy, golden waffles infused with bursts of juicy blueberries."
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 uppercase text-sm mb-2">Ingredients</h2>
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
            <h2 className="font-bold text-gray-900 uppercase text-sm mb-2">Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</li>
              <li>
                In a separate bowl, whisk the buttermilk, milk, melted butter, egg, and vanilla extract until well
                combined.
              </li>
              <li>
                Pour the wet ingredients into the dry ingredients and stir gently until just combined. It's okay if
                there are a few lumps; do not overmix.
              </li>
              <li>Gently fold in the fresh blueberries into the batter.</li>
              <li>Preheat your waffle iron and lightly grease it with cooking spray or melted butter.</li>
              <li>Ladle the waffle batter onto the preheated waffle iron, making sure not to overfill it.</li>
              <li>Close the waffle iron and cook the waffle until it's golden brown and crispy.</li>
              <li>
                Remove the waffle carefully from the iron and place it on a plate. Repeat the process with the remaining
                batter.
              </li>
              <li>
                Serve the delicious blueberry waffles warm, topped with maple syrup, additional blueberries, and a
                dusting of powdered sugar, if desired.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 uppercase text-sm mb-2">Watch and cook</h2>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CHfYrPNOjNiqFoxlPa6qXsK8jVwbfs.png"
                alt="Blueberry waffles video thumbnail"
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-4 cursor-pointer">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute top-0 right-0 bg-white/80 p-2 m-2 rounded">
                <span className="font-bold">2:25</span>
              </div>
              <div className="absolute top-0 left-0 right-0 bg-white/80 p-2 m-2 rounded text-center">
                <span className="font-bold text-xl">BLUEBERRY WAFFLES</span>
              </div>
              <div className="absolute bottom-0 left-0 bg-black/70 p-1 m-2 rounded text-white text-xs">
                THE ANTHONY KITCHEN
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CHfYrPNOjNiqFoxlPa6qXsK8jVwbfs.png"
            alt="Blueberry waffles on a plate"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}


import { Clock } from "lucide-react";
import { Navbar } from "./Navbar";
import Cookie from "../assets/images/Cookie.png";
import Bg from "../assets/images/Bg.jpg";
import Chicken from "../assets/images/Chicken.jpg";
import Chocolate from "../assets/images/Chocolate.jpg";
import Recipe4 from "../assets/images/Recipe4.jpg";
import Recipe5 from "../assets/images/Recipe5.jpg";
import Recipe6 from "../assets/images/Recipe6.jpg";

interface Recipe {
  id: number;
  name: string;
  time: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Cookie,
  },

  {
    id: 3,
    name: "Nachos With Mayo",
    time: "20-30 min",
    image: Chicken,
  },
  {
    id: 4,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Chocolate,
  },
  {
    id: 5,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Recipe4,
  },
  {
    id: 6,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Recipe5,
  },
  {
    id: 7,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Recipe6,
  },
];

export default function Recipes() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  py-5 md:py-7 md:px-16">
        <div className="relative mb-24 w-full">
          {/* Background Image */}
          <img
            src={Bg || "/placeholder.svg"}
            alt="Delicious dish in a pan"
            className="md:h-[450px] h-auto  w-full object-cover"
          />

          {/* Full Image Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Container */}
          <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2 px-4 md:px-14 w-full md:w-auto">
            <div className="p-4 rounded-md text-white max-w-md">
              <h1 className="text-3xl font-bold mb-2">
                Unleash your Inner Chef
              </h1>
              <p className="text-lg">
                Discover a world of culinary delights —
                <br />
                recipes to inspire your next masterpiece
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array(15)
              .fill(null)
              .map((_, index) =>
                recipes.map((recipe) => (
                  <div
                    key={`${recipe.id}-${index}`}
                    className="relative h-[320px] w-full md:w-[247px] rounded-tl-[40px] overflow-hidden"
                  >
                    <div className="relative  bg-red-500">
                      <img
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.name}
                        loading="lazy"
                        className="object-cover w-full h-[290px]"
                      />
                    </div>
                    <div className="absolute bottom-0 rounded-br-[40px] left-0 right-0 bg-orange-400 p-3">
                      <h3 className="font-semibold text-sm text-black">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-4 h-4 text-black" />
                        <span className="text-xs text-black">
                          {recipe.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </main>
    </>
  );
}

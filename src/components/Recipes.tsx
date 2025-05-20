"use client"

import { Clock, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { getRandomRecipes } from "../service/api";
import Bg from "../assets/images/Bg.jpg"

interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomRecipes(1130);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchData();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const search = searchTerm.toLowerCase();
    return recipe.title.toLowerCase().includes(search);
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-5 md:py-7 md:px-28">
        {/* === Background Section with Search === */}
        <div className="relative mb-24 w-full">
          <img
            src={Bg || "/placeholder.svg"}
            alt="Delicious dish in a pan"
            className="md:h-[450px] h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2 px-4 md:px-14 w-full md:w-auto">
            <div className="p-4 rounded-md text-white max-w-md">
              <h1 className="text-3xl font-bold mb-2">Unleash your Inner Chef</h1>
              <p className="text-lg mb-6">
                Discover a world of culinary delights —
                <br />
                recipes to inspire your next masterpiece
              </p>
              <div className="relative max-w-xs">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="bg-white bg-opacity-90 text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Search recipe"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Recipe Grid === */}
        <div className="container mx-auto px-4 py-8">
          {filteredRecipes.length === 0 ? (
            <p className="text-center text-gray-600">No recipes found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="relative h-[320px] w-full md:w-[247px] rounded-tl-[40px] overflow-hidden"
                >
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    loading="lazy"
                    className="object-cover w-full h-[290px]"
                  />
                  <div className="absolute bottom-0 rounded-br-[40px] left-0 right-0 bg-orange-400 p-3">
                    <h3 className="font-semibold text-sm text-black">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-4 h-4 text-black" />
                      <span className="text-xs text-black">
                        {recipe.readyInMinutes} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}


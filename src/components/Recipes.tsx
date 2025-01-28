// import Image from "next/image"
import { Clock } from "lucide-react"
import { Navbar } from "./Navbar"
import Cookie from "../assets/images/Cookie.png"
import Egg from "../assets/images/Egg.png"
import Morta from "../assets/images/Mortal.png"
import Bg from "../assets/images/Recipebg.png"

interface Recipe {
  id: number
  name: string
  time: string
  image: string
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: Cookie
  },
  {
    id: 2,
    name: "Egg Toast",
    time: "8-10 min",
    image: Egg,
  },
  {
    id: 3,
    name: "Nachos With Mayo",
    time: "20-30 min",
    image: Morta
  },
  {
    id: 4,
    name: "Blueberry Waffle",
    time: "10-15 min",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CAWgoM30DoYSN4nxruwK2o0Cej8Jfs.png",
  },
]

export default function Recipes() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen  py-5 md:py-7 md:px-28">
      {/* Hero Section */}
      <div className="relative mb-24 h-[300px] w-full">
        <img
          src={Bg}
          alt="Delicious dish in a pan"
        //   fill
          className="h-[400px] w-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Unleash your inner chef</h1>
          <p className="text-lg opacity-90">
            Discover a world of culinary delights —
            <br />
            recipes to inspire your next masterpiece
          </p>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(15)
            .fill(null)
            .map((_, index) =>
              recipes.map((recipe) => (
                <div key={`${recipe.id}-${index}`} className="relative h-[320px] w-[247px] rounded-tl-[40px] overflow-hidden">
                  <div className="relative  bg-red-500">
                    <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="object-cover h-[290px]" />
                  </div>
                  <div className="absolute bottom-0 rounded-br-[40px] left-0 right-0 bg-orange-400 p-3">
                    <h3 className="font-semibold text-sm text-black">{recipe.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-4 h-4 text-black" />
                      <span className="text-xs text-black">{recipe.time}</span>
                    </div>
                  </div>
                </div>
              )),
            )}
        </div>
      </div>
    </main>
    </>
  )
}


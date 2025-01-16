import Tomato from "../assets/images/Tomato.png";
import Mushroom from "../assets/images/Mushroom.png";
import Cup from "../assets/images/Cup3.png";
import Recipe from "../assets/images/recipe-bg.png"

const recipes = [
   {
    id: 1,
    name: "Caprese Salad",
    type: "Starter",
    duration: "15 minutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    imageUrl: Recipe,
   },
   {
    id: 2,
    name: "Caprese Salad",
    type: "Starter",
    duration: "15 minutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    imageUrl: Recipe,
   },
   {
    id: 3,
    name: "Caprese Salad",
    type: "Starter",
    duration: "15 minutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    imageUrl: Recipe,
   },
   {
    id: 4,
    name: "Caprese Salad",
    type: "Starter",
    duration: "15 minutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    imageUrl: Recipe,
   },
   {
    id: 5,
    name: "Caprese Salad",
    type: "Starter",
    duration: "15 minutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    imageUrl: Recipe,
   },
]

export const CheckOut = () => {
  return (
    <div className="pt-7 ">
    <div className="py-5  bg-[#EDEDED] w-full h-auto  relative">
      <img
        src={Cup}
        alt="Cup"
        className="absolute left-80 top-72 transform -translate-y-1/2 w-auto h-auto"
      />
      <img
        src={Tomato}
        alt="bg"
        className="absolute top-60 right-10 transform -translate-x-1/2 w-auto z-30"
      />
      <img
        src={Mushroom}
        alt="bg"
        className="absolute top-36 right-36 transform -translate-x-1/2 w-auto h-auto"
      />
      <img
        src={Tomato}
        alt=""
        className="absolute left-36 top-36 transform -translate-y-1/2 w-auto h-auto"
      />
     
      <div className="flex justify-center items-center   md:flex-row flex-col md:py-7 ">
      <div className="flex flex-col gap-8">
            <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  w-full text-center md:h-[122px] h-auto ">
            Check out new recipe’s
            </h1>
            <p className="text-2xl px-5  text-center md:-mt-9">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="text-center px-5 tx-2xl">Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
      </div>

      <div className="flex py-6 mt-24  pl-14 gap-10">
        {recipes.map((recipe) => (
           <div key={recipe.id} className="flex flex-col gap-5 px-3 w-[355px] h-[348px] rounded-tl-[50px] rounded-tr-3xl rounded-bl-3xl rounded-br-[50px] bg-gradient-to-b from-[#ee9daa] to-[#F5D199] items-center">
           <img src={recipe.imageUrl} alt="" className="w-[199px] h-[199px] rounded-full -mt-28" />
             
             <h2 className="text-3xl font-semibold">{recipe.name}</h2>
             <div className="flex w-full gap-5 justify-between">
               <p className="">Type: {recipe.type}</p>
               <p>{recipe.duration}</p>
             </div>
   
             <p className="font-medium  text-base">{recipe.description}</p>
           </div>

        ))}
       
      </div>
    </div>
    </div>
  );
};

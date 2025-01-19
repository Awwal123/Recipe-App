// import React from "react";
import Burger from "../assets/images/Burger.png";
import Peer from "../assets/images/Peer.png";
import LeftPizza from "../assets/images/LPizza.png";
import RightPizza from "../assets/images/RPizza.png";
import Cake from "../assets/images/Cake.png";

export const Kitchen = () => {
  return (
    <div className="pt-5 md:py-20 md:px-28 w-full h-auto bg-[#EBE2E4] relative">
      {/* Background Decorative Icons */}
      <img src={Peer} alt="Peer" className="absolute bottom-[10%] right-[20%] w-[120px]" />
      <img src={LeftPizza} alt="Left Pizza" className="absolute top-[40%] right-[0%] w-[208px]" />
      <img src={RightPizza} alt="Right Pizza" className="absolute top-[60%] left-[40%] w-[208px]" />
      <img src={Cake} alt="Cake" className="absolute top-[10%] left-[45%] w-[183px]" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-52 relative items-center">
        {/* Image Section */}
        <img src={Burger} alt="Burger" className="w-[300px] md:w-[400px] md:rounded-tl-[50px] md:rounded-br-[50px] shadow-lg" />

        {/* Text Section */}
        <div className="flex flex-col gap-4 items-start">
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent bg-clip-text leading-tight">
            From Kitchen to Table
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent bg-clip-text leading-tight">
            Discover Your Next
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent bg-clip-text leading-tight">
            Delicious Dish!
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="bg-[#C91937] text-white py-2 px-6 rounded-tl-2xl rounded-br-2xl hover:bg-[#A3142B] font-semibold">
              Register
            </button>
            <button className="bg-[#FDB646] text-white py-2 px-6 rounded-tl-2xl rounded-br-2xl hover:bg-[#E69C32] font-semibold">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

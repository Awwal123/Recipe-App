// import React from "react";
import Burger from "../assets/images/Burger.png";
import Peer from "../assets/images/Peer.png";
import LeftPizza from "../assets/images/LPizza.png";
import RightPizza from "../assets/images/RPizza.png";
import Cake from "../assets/images/Cake.png";
import { Link } from "react-router-dom";

export const Kitchen = () => {
  return (
    <div className="py-20 md:py-20 md:px-28 w-full h-auto bg-[#EBE2E4] relative">
      <img src={Peer} alt="Peer" className="absolute top-3 md:bottom-[10%] right-5 m:right-[20%] w-14 md:w-[120px]" />
      <img src={LeftPizza} alt="Left Pizza" className="absolute md:top-[40%] bottom-[10%]  right-7 md:right-[0%]  w-20 md:w-[208px]" />
      <img src={RightPizza} alt="Right Pizza" className="absolute top-[50%] md:top-[60%] md:left-[40%] w-20 md:w-[208px]" />
      <img src={Cake} alt="Cake" className="absolute top-[5%] w-16 md:top-[10%] left-2 md:left-[45%] md:w-[183px]" />

      <div className="flex flex-col md:flex-row w-full md:justify-center gap-5 md:gap-52 relative items-center">
       
        <img src={Burger} alt="Burger" className="w-[80vw] h-[400px]  md:h-auto md:w-[400px] rounded-tl-[50px] rounded-br-[50px] shadow-lg" />

        {/* Text Section */}
        <div className="flex flex-col mt-9 gap-4 items-center md:items-start">
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent text-center bg-clip-text leading-tight">
            From Kitchen to Table
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent text-center bg-clip-text leading-tight">
            Discover Your Next
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent text-center bg-clip-text leading-tight">
            Delicious Dish!
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 my-5 pb-8">
        <Link to={"/signup"}>    <button className="bg-[#C91937] text-white py-2 px-6 rounded-tl-2xl rounded-br-2xl hover:bg-[#A3142B] font-semibold">
              Register
            </button> </Link>
      <Link to={"/recipes"}><button className="bg-[#FDB646] text-white py-2 px-6 rounded-tl-2xl rounded-br-2xl hover:bg-[#E69C32] font-semibold">
              Explore
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

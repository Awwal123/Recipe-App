import Pizza from "../assets/images/Pizza.png";
import PineApple from "../assets/images/PineApple.png";
import Cup from "../assets/images/Cup2.png";
import Niddle from "../assets/images/Niddle.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="px-5 py-5 md:py-7 md:px-28 w-full h-auto bg-[#EDEDED]  relative">
      <img
        src={Cup}
        alt="Cup"
        className="absolute top-96 right-11 w-[110px] h-auto"
      />
      <img
        src={Niddle}
        alt="Niddle"
        className="absolute bottom-60 right-96 transform -translate-x-1/2 w-auto h-auto"
      />

      <img
        src={PineApple}
        alt="Cake"
        className="absolute right-1/3 top-40 transform -translate-y-1/2 w-auto h-auto"
      />
      <div className="flex justify-between md:py-7 relative">
        <div className="flex flex-col items-center gap-20 justify-center">
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  w-full text-center md:h-[122px] h-auto ">
              Far from home?
            </h1>
            <p className="text-2xl -mt-9">
              we got you, checkout recipes from home chef's
            </p>
          </div>

          <div className="flex justify-between gap-16">
            <Link to="/signup">
              <div className="flex items-center cursor-pointer justify-center rounded-tl-3xl shadow-custom rounded-br-3xl  bg-[#C91937] text-white w-[149px] h-[47px]">
                Register
              </div>
            </Link>
            <div className="flex items-center cursor-pointer justify-center rounded-tl-3xl shadow-custom rounded-br-3xl  bg-[#FDB646] text-white w-[149px] h-[47px]">
              Explore
            </div>
          </div>
        </div>
        <div>
          <img
            src={Pizza}
            alt="pizza"
            className="w-[463px] h-screen rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

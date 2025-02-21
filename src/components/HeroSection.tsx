import Pizza from "../assets/images/Pizza.png";
import PineApple from "../assets/images/PineApple.png";
import Cup from "../assets/images/Cup2.png";
import Niddle from "../assets/images/Niddle.png";
import Github from "../assets/images/git.png";
import Twitter from "../assets/images/Twitter.png";
import din from "../assets/images/linkdin.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="md:pb-14 z-10">
      <div className="pt-5  md:py-7  md:px-28 w-full h-auto   relative">
        <img
          src={Cup}
          alt="Cup"
          className="absolute top-96 right-11 w-[110px] h-auto"
        />
        {/* <img
          src={Niddle}
          alt="Niddle"
          className="absolute bottom-60 right-96 transform -translate-x-1/2 w-auto h-auto"
        />
        <img
          src={PineApple}
          alt="Cake"
          className="absolute right-1/3 top-40 transform -translate-y-1/2 w-auto h-auto"
        /> */}
        <div className="flex justify-between md:flex-row flex-col md:py-7 relative">
          <div className="flex flex-col items-center gap-10 md:gap-20 justify-center">
            <div className="flex flex-col">
              <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  w-full text-center md:h-[122px] h-auto ">
                Far from home?
              </h1>
              <p className="text-2xl px-5  text-center md:-mt-9">
                we got you, checkout recipes from home chef's
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-10 md:gap-16">
              <Link to="/signup">
                <div className="flex items-center cursor-pointer justify-center rounded-tl-3xl shadow-custom rounded-br-3xl  bg-[#C91937] text-white w-[149px] h-[47px]">
                  Register
                </div>
              </Link>
              <Link to={"/recipes"}>
                <div className="flex items-center cursor-pointer justify-center rounded-tl-3xl shadow-custom rounded-br-3xl  bg-[#FDB646] text-white w-[149px] h-[47px]">
                  Explore
                </div>
              </Link>
            </div>
            <div className="flex  my-5 md:mt-20 items-center justify-center w-[100%] gap-10">
              <img src={Twitter} alt="" />
              <img src={Github} alt="" />
              <div className="w-[45px] h-[45px] rounded-full p-[2px] bg-gradient-to-r from-red-500 to-yellow-500">
                <div className="w-full h-full flex items-center justify-center rounded-full bg-white">
                  <img src={din} alt="" className="" />
                </div>
              </div>
              <hr className="flex-grow hidden md:block border-2 border-yellow-500" />
            </div>
          </div>
          <img
            src={Pizza}
            alt="pizza"
            className="md:w-[463px] w-full md:h-screen h-auto md:rounded-tl-[50px] md:rounded-br-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

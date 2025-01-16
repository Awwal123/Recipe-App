import { useState } from "react";
import Profile from "../assets/images/Profile.png";
import Hamburger from "../assets/images/hamburger.png";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const tooggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="px-5 py-5 md:py-7 md:px-28 ">
        <div className="flex justify-between">
          <div className="flex w-full md:w-auto justify-between md:justify-start">
            <h1 className="font-bold text-2xl">CookBooks</h1>
            {/* Hamburger Menu */}
            <img
              src={Hamburger}
              alt=""
              className="cursor-pointer block md:hidden"
              onClick={tooggleNavbar} // Fixed
            />
          </div>

          {/* Navbar for Larger Devices */}
          <div className="hidden md:flex justify-between items-center w-[40%] gap-14">
            <div className="flex gap-28">
              <p className="text-base">Home</p>
              <p>Explore</p>
              <p>About</p>
            </div>
            <div>
              <img src={Profile} alt="p" className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Navbar for Small Devices */}
        {isNavOpen && (
          <div className="absolute top-0 right-0 h-screen w-[100%] z-50 bg-gradient-to-b from-red-500 to-yellow-500 text-black  md:hidden">
            <div className="flex p-5 justify-end">
              <button
                className="text-red-700 w-5 h-5 text-3xl"
                onClick={tooggleNavbar}
              >
                X
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-10 justify-center items-center">
              <div className="flex flex-col w-full items-center ">
              <p className="mb-4">Home</p>
              <hr className="w-full -mt-3 border-gray-200 border-2"/>
              </div>
              <div className="flex flex-col w-full items-center ">
              <p className="mb-4">Explore</p>
              <hr className="w-full -mt-3 border-gray-200 border-2"/>
              </div>
              <div className="flex flex-col w-full items-center ">
              <p className="mb-4">About</p>
              <hr className="w-full -mt-3 border-gray-200 border-2"/>
              </div>
              <div className="flex flex-col w-full items-center ">
              <p className="mb-4">Profile</p>
              <hr className="w-full -mt-3 border-gray-200 border-2"/>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:pl-28 ">
        <hr className="w-full border-2 border-yellow-400" />
      </div>
    </>
  );
};

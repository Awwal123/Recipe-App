import Cup from "../assets/images/Cup.png";
import Cake from "../assets/images/Cake.png";
import Niddle from "../assets/images/Niddle.png";
import Gmail from "../assets/images/Gmail.png";
import Google from "../assets/images/Google.png";
import Github from "../assets/images/Github.png";
import Bg1 from "../assets/images/bg1.png";
import Bg2 from "../assets/images/bg2.png";
import Bg3 from "../assets/images/bg3.png";
import Mobilebg from "../assets/images/Mobilebg.png";

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-auto flex md:flex-row flex-col md:py-10 md:px-20 bg-[#EDEDED] relative">
        <img
          src={Cup}
          alt="Cup"
          className="absolute top-0 left-0 w-auto h-auto"
        />
        <img
          src={Cake}
          alt="Cake"
          className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-auto h-auto"
        />
        {/* Niddle Image */}
        <img
          src={Niddle}
          alt="Niddle"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-auto"
        />

        <div className="flex md:flex-row flex-col justify-between w-full relative">
          <div className="flex-1 flex-col px-2  justify-start md:gap-28 py-8 flex  items-center">
            <div className="grid w-[85px] h-[72-x] grid-cols-3 grid-rows-3 gap-4">
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black rounded-full"></div>
            </div>

            <div className="flex items-center justify-center flex-col gap-12">
              <h1 className="md:text-6xl text-4xl  my-10 font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  w-full text-center md:h-[122px] h-auto ">
                Sign up with your identity provider
              </h1>

              <div className="flex w-[80vw] md:w-[500px] flex-col gap-9">
                <div className="bg-white w-full md:w-[500px] h-[49px] flex gap-7 items-center px-5 shadow-custom py-5 rounded-3xl cursor-pointer">
                  <img src={Gmail} alt="g" className="w-5 h-5" />
                  <p className="text-gray-600 text-xl font-semibold">
                    Sign up with Email
                  </p>
                </div>
                <div className="bg-white w-full md:w-[500px] h-[49px] flex gap-7 items-center px-5 shadow-custom py-5 rounded-3xl cursor-pointer">
                  <img src={Google} alt="g" className="w-5 h-5" />
                  <p className="text-gray-600 text-xl font-semibold">
                    Sign up with Google
                  </p>
                </div>
                <div className="bg-white w-full md:w-[500px] h-[49px] flex gap-7 items-center px-5 shadow-custom py-5 rounded-3xl cursor-pointer">
                  <img src={Github} alt="g" className="w-5 h-5" />
                  <p className="text-gray-600 text-xl font-semibold">
                    Sign up with Github
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <img
              src={Bg1}
              alt="b"
              className="rounded-tl-3xl w-[481px] h-[302px]"
            />
            <img src={Bg2} alt="b" className=" w-[481px] h-[302px]" />
            <img
              src={Bg3}
              alt="b"
              className="rounded-br-3xl w-[481px] h-[302px]"
            />
          </div>
          <div className="block md:hidden w-full mt-9 h-[240px]">
            <img src={Mobilebg} alt="m" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

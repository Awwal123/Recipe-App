import Cup from "../assets/images/Cup.png";
import Cake from "../assets/images/Cake.png";
import Niddle from "../assets/images/Niddle.png";
import Gmail from "../assets/images/Gmail.png";
import Google from "../assets/images/Google.png";
import Github from "../assets/images/Github.png"

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen flex md:flex-row flex-col md:py-10 md:px-20 bg-[#EDEDED] relative">
        <img
          src={Cup}
          alt="Cup"
          className="absolute top-0 left-0 w-auto h-auto"
        />
        <img
          src={Cake}
          alt="Cake"
          className="absolute right-24 top-1/2 transform -translate-y-1/2 w-auto h-auto"
        />
        {/* Niddle Image */}
        <img
          src={Niddle}
          alt="Niddle"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-auto"
        />
        form
        <div className="flex-1 flex-col  gap-10 flex justify-center items-center">
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

          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  w-full text-center md:h-[122px] h-auto ">
              Sign up with your identity provider
            </h1>

            <div className="flex flex-col gap-6">
                <div className="bg-white md:w-[400px] h-[49px] flex gap-7 items-center px-5 shadow-2xl py-5 rounded-3xl cursor-pointer">
                    <img src={Gmail} alt="g" className="w-5 h-5"/>
                    <p className="text-gray-600 text-xl font-semibold">Sign up with Email</p>
                </div>
                <div className="bg-white md:w-[400px] h-[49px] flex gap-7 items-center px-5 shadow-2xl py-5 rounded-3xl cursor-pointer">
                    <img src={Google} alt="g" className="w-5 h-5"/>
                    <p className="text-gray-600 text-xl font-semibold">Sign up with Google</p>
                </div>
                <div className="bg-white md:w-[400px] h-[49px] flex gap-7 items-center px-5 shadow-2xl py-5 rounded-3xl cursor-pointer">
                    <img src={Github} alt="g" className="w-5 h-5"/>
                    <p className="text-gray-600 text-xl font-semibold">Sign up with Github</p>
                </div>

            </div>
          </div>
        </div>
        {/* Right Side: Background Image */}
        <div className="hidden md:flex-1 bg-cover bg-center bg-[url('/path/to/your/background-image.jpg')]"></div>
      </div>
    </>
  );
};

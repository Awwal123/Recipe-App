import Pizza from "../assets/images/Pizza.png";
import PineApple from "../assets/images/PineApple.png";
import Cup from "../assets/images/Cup2.png";
import Niddle from "../assets/images/Niddle.png";

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
        <div>
            Ameer
        </div>
        <div>
            <img src={Pizza} alt="" />
        </div>
      </div>
    </div>
    
  );
};

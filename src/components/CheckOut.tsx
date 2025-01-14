import Tomato from "../assets/images/Tomato.png";
import Mushroom from "../assets/images/Mushroom.png";
import Cup from "../assets/images/Cup3.png";
export const CheckOut = () => {
  return (
    <div className="py-5 md:py-7  md:px-28 w-full h-auto bg-[#EDEDED] relative">
      <img
        src={Cup}
        alt="Cup"
        className="absolute left-80 top-72 transform -translate-y-1/2 w-auto h-auto"
      />
      <img
        src={Tomato}
        alt="bg"
        className="absolute top-60 right-10 transform -translate-x-1/2 w-auto"
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
    </div>
  );
};

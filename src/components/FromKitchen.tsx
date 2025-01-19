import Burger from "../assets/images/Burger.png";
export const Kitchen = () => {
  return (
    <div className="pt-5  md:py-20  md:px-28 w-full h-auto bg-[#EBE2E4] relative">
      <div className="flex justify-center gap-14">
        <img src={Burger} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text leading-tight  text-left md:h-[122px] h-auto ">
            From Kitchen to Table
          </h1>
          <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text  text-left md:h-[122px] h-auto ">
            Discover Your Next
          </h1>
          <h1 className="md:text-6xl text-4xl  font-bold bg-gradient-to-r  from-[#C91937] to-[#FDB646] text-transparent bg-clip-text   text-left md:h-[122px] h-auto ">
            Delicious Dish?
          </h1>
        </div>
      </div>
    </div>
  );
};

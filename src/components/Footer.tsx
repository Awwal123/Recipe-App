export const Footer = () => {
    return (
      <div className="py-20 md:py-20 md:px-28 px-5 w-full h-auto bg-[#F7F3F4] text-gray-700 relative">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold">CookBooks</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Welcome to our recipe website, where joy meets mood-based cooking! 
              Explore diverse, delectable recipes, curated to match every mood. From 
              adventurous to comforting, find satisfying options with clear instructions 
              and helpful tips. Join our food enthusiast community, share your journey, 
              and let your mood inspire your next culinary adventure. Happy cooking!
            </p>
          </div>
  
          {/* Center Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#FDB646]">Home</a></li>
              <li><a href="#recipes" className="hover:text-[#FDB646]">Recipes</a></li>
              <li><a href="#about" className="hover:text-[#FDB646]">About Us</a></li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-4 text-sm">
              Ph.no: <a href="tel:+916204477194" className="hover:text-[#FDB646]">+91-6204477194</a>, <a href="tel:+919902723424" className="hover:text-[#FDB646]">+91-9902723424</a>
            </p>
            <p className="mt-2 text-sm">
              Email: <a href="mailto:singhpiyush989@gmail.com" className="hover:text-[#FDB646]">singhpiyush989@gmail.com</a>
            </p>
          </div>
        </div>
  
        {/* Divider */}
        <div className="mt-10 border-t border-[#FDB646]"></div>
  
        {/* Footer Bottom */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2023 CookBooks. All Rights Reserved.</p>
          <p>
            Designed by <a href="#" className="hover:text-[#FDB646]">prajnapati_</a>, Crafted by <a href="#" className="hover:text-[#FDB646]">piyushsingh</a>
          </p>
        </div>
      </div>
    );
  };
  
import React from "react";
import Men from "../../assets/img/men-jewellery.avif";
import Women from "../../assets/img/women-jewellery.jpg";

const HeroSection = () => {
  return (
    <main className="overflow-hidden" >
      <div className="grid grid-cols-2 w-full h-screen mb-5">
        <div className="relative overflow-hidden group">
          <div className="absolute ml-0 inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Men}
              alt="Men's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-1/2 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            <p>
              MEN
              <br />
              <span className="text-lg font-thin">
                for your beloved husband, son, brother, or friend with a
                thoughtful gift that shows your appreciation.
              </span>
            </p>
            <span className="italic">you</span>.
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Women}
              alt="Women's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-1/2 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            <p>
              Women
              <br />
              <span className="text-lg font-thin">
                for your beloved wife, daughter, sister, or family with a
                thoughtful gift that shows your affection.
              </span>
            </p>
            <span className="italic">you</span>.
          </div>
        </div>

        <h1 className="absolute left-1/2 -translate-x-1/2 translate-y-[300px] text-[56px] font-semibold">
          AETHER
        </h1>
      </div>
    </main>
  );
};

export default HeroSection;

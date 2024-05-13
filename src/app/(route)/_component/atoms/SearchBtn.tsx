import React from "react";
import WhiteGlass from "@/../public/svgs/reading-glass-white.svg";

const WhiteGlassIcon = () => {
  return (
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#027BEA] rounded-full h-12 w-12 flex justify-center items-center">
      <WhiteGlass width={21} height={21} />
    </div>
  );
};

export default WhiteGlassIcon;

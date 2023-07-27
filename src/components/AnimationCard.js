import React from "react";

const AnimationCard = () => {
  return (
    <div className="md:w-44 md:h-44 w-28 h-28 flex-shrink-0 shadow-md flex flex-col justify-end cursor-pointer hover:scale-110 transform transition-all group">
      <div className="flex md:w-44 w-28 py-[6px] px-[10px] justify-center items-center gap-[10px] bg-[#CBF3FF] group-hover:bg-[#37CFFF] text-[#37CFFF] text-xs font-Poppins font-medium group-hover:text-[#FFF]">
        <span>Product Name</span>
      </div>
    </div>
  );
};

export default AnimationCard;

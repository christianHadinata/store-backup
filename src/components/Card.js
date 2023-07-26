import React from "react";

const Card = () => {
  return (
    <div className="w-44 h-44 flex-shrink-0 shadow-md flex flex-col justify-end cursor-pointer hover:scale-110 transform transition-all">
      <div className="flex w-44 py-[6px] px-[10px] justify-center items-center gap-[10px] bg-[#CBF3FF] hover:bg-[#37CFFF] text-[#37CFFF] text-xs font-Poppins font-medium hover:text-[#FFF]">
        <span>Product Name</span>
      </div>
    </div>
  );
};

export default Card;

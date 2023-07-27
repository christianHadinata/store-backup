import React from "react";

const SearchBox = () => {
  return (
    <div className="flex px-4 items-center w-1/2 h-10 bg-white">
      <input
        className="text-[#9A9999] font-Poppins text-xs font-normal leading-4 w-full h-full px-4"
        placeholder="search something..."
      />
      <button className="flex justify-center items-center bg-[#37CFFF] h-10 w-[102px] py-3 px-6 gap2.5 hover:bg-[#CBF3FF] text-white hover:text-[#37CFFF]">
        <div className=" font-Poppins text-base font-normal">Search</div>
      </button>
    </div>
  );
};

export default SearchBox;

import React, { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="md:flex md:h-16 bg-white justify-around items-center flex-shrink-0 gap-64 shadow-lg fixed top-0 w-full z-10">
      <div
        className={`md:flex md:h-8 px-5 pt-5  md:px-0 md:pt-0  justify-center items-center gap-2 font-Poppins text-base font-normal cursor-default relative ${
          open ? "pb-16 md:pb-0" : ""
        } `}
      >
        E-Commerce Store
      </div>
      <button
        className="md:hidden absolute right-8 top-5 w-5 h-5"
        onClick={() => setOpen(!open)}
      >
        <img
          src={open ? "hamburger-close.png" : "hamburger-open.png"}
          alt="..."
        />
      </button>

      <div
        className={`md:flex flex-col md:flex-row w-72 md:h-8 justify-center items-center flex-shrink-0 gap-4 px-5 md:px-0 absolute md:relative ${
          open ? "relative" : "top-[-490px] md:top-0"
        }`}
      >
        <div
          className={`w-14 flex-shrink-0 hover:text-[#37CFFF] hover:underline hover:underline-offset-8 cursor-pointer font-Poppins font-light text-sm md:py-0 relative md:relative ${
            open ? "py-4 md:py-0" : "top-[-490px] md:top-0"
          }`}
        >
          Home
        </div>
        <div
          className={`flex-shrink-0 w-16 hover:text-[#37CFFF] hover:underline hover:underline-offset-8 cursor-pointer font-Poppins font-light text-sm md:py-0 relative md:relative ${
            open ? "py-4 md:py-0" : "top-[-490px] md:top-0"
          }`}
        >
          Product
        </div>
        <div
          className={`flex-shrink-0 w-20 hover:text-[#37CFFF] hover:underline hover:underline-offset-8 cursor-pointer font-Poppins font-light text-sm md:py-0 relative md:relative ${
            open ? "py-4 md:py-0" : "top-[-490px] md:top-0"
          }`}
        >
          Category
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          className={`w-4 md:h-4 flex-shrink-0 cursor-pointer md:my-0 relative md:relative ${
            open ? "my-4 md:my-0 h-4" : "top-[-490px] md:top-0"
          }`}
        >
          <path
            d="M6.125 0.875C6.70516 0.875 7.26156 1.10547 7.6718 1.5157C8.08203 1.92594 8.3125 2.48234 8.3125 3.0625V3.5H3.9375V3.0625C3.9375 2.48234 4.16797 1.92594 4.5782 1.5157C4.98844 1.10547 5.54484 0.875 6.125 0.875ZM9.1875 3.5V3.0625C9.1875 2.25027 8.86484 1.47132 8.29051 0.896985C7.71618 0.322655 6.93723 0 6.125 0C5.31277 0 4.53382 0.322655 3.95949 0.896985C3.38516 1.47132 3.0625 2.25027 3.0625 3.0625V3.5H0V12.25C0 12.7141 0.184374 13.1592 0.512563 13.4874C0.840752 13.8156 1.28587 14 1.75 14H10.5C10.9641 14 11.4092 13.8156 11.7374 13.4874C12.0656 13.1592 12.25 12.7141 12.25 12.25V3.5H9.1875ZM0.875 4.375H11.375V12.25C11.375 12.4821 11.2828 12.7046 11.1187 12.8687C10.9546 13.0328 10.7321 13.125 10.5 13.125H1.75C1.51794 13.125 1.29538 13.0328 1.13128 12.8687C0.967187 12.7046 0.875 12.4821 0.875 12.25V4.375Z"
            fill="black"
          />
          <path
            d="M15 3.5C15 5.15685 13.6569 6.5 12 6.5C10.3431 6.5 9 5.15685 9 3.5C9 1.84315 10.3431 0.5 12 0.5C13.6569 0.5 15 1.84315 15 3.5Z"
            fill="#F7B32F"
          />
        </svg>
      </div>
      <div
        className={`flex justify-center items-center gap-5  md:py-0 relative md:relative ${
          open ? "py-4 md:py-0" : "top-[-490px] md:top-0"
        }`}
      >
        <button className="md:flex w-28 h-8 md:py-3 md:px-6 justify-center items-center gap-2 rounded-md bg-[#CBF3FF] text-[#37CFFF] font-Poppins font-normal hover:bg-cyan-400 hover:text-[#FFF] ">
          Sign In
        </button>
        <button className="md:flex w-24 h-8 md:py-3 md:px-6 justify-center items-center rounded-md bg-[#37CFFF] text-[#FFF] font-Poppins font-normal hover:bg-cyan-100 hover:text-[#37CFFF]">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;

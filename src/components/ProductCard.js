import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[269px] h-[363px] inline-flex p-2.5 flex-col items-start gap-2 shadow-md bg-white">
      <div className="bg-[#D9D9D9] w-[249px] h-[210px]"></div>
      <div className="flex w-60 flex-col items-start gap-1">
        <div className="text-[#9C9C9C] font-Poppins text-xs font-light leading-4">
          Category
        </div>
        <div className="text-[#2F2F2F] font-Poppins text-base font-medium leading-4">
          Product Name
        </div>
      </div>
      <div className="text-[#2F2F2F] font-Poppins text-xs font-light leading-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </div>
      <div className="flex w-60 items-center gap-40 ">
        <div className="text-black font-Poppins text-sm font-medium leading-4">
          0$
        </div>
        <div className="flex w-14 py-1 px-2.5 justify-center items-center gap-2 flex-shrink-0 bg-[#CBF3FF]">
          <div className="text-[#37CFFF] font-Poppins text-sm font-normal leading-4">
            Buy
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            className="w-2.5 h-2.5 flex-shrink-0"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 4.6875C5.58288 4.6875 5.66237 4.72042 5.72097 4.77903C5.77958 4.83763 5.8125 4.91712 5.8125 5V5.9375H6.75C6.83288 5.9375 6.91237 5.97042 6.97097 6.02903C7.02958 6.08763 7.0625 6.16712 7.0625 6.25C7.0625 6.33288 7.02958 6.41237 6.97097 6.47097C6.91237 6.52958 6.83288 6.5625 6.75 6.5625H5.8125V7.5C5.8125 7.58288 5.77958 7.66237 5.72097 7.72097C5.66237 7.77958 5.58288 7.8125 5.5 7.8125C5.41712 7.8125 5.33763 7.77958 5.27903 7.72097C5.22042 7.66237 5.1875 7.58288 5.1875 7.5V6.5625H4.25C4.16712 6.5625 4.08763 6.52958 4.02903 6.47097C3.97042 6.41237 3.9375 6.33288 3.9375 6.25C3.9375 6.16712 3.97042 6.08763 4.02903 6.02903C4.08763 5.97042 4.16712 5.9375 4.25 5.9375H5.1875V5C5.1875 4.91712 5.22042 4.83763 5.27903 4.77903C5.33763 4.72042 5.41712 4.6875 5.5 4.6875Z"
              fill="#37CFFF"
            />
            <path
              d="M5.5 0.625C5.9144 0.625 6.31183 0.78962 6.60485 1.08265C6.89788 1.37567 7.0625 1.7731 7.0625 2.1875V2.5H3.9375V2.1875C3.9375 1.7731 4.10212 1.37567 4.39515 1.08265C4.68817 0.78962 5.0856 0.625 5.5 0.625ZM7.6875 2.5V2.1875C7.6875 1.60734 7.45703 1.05094 7.0468 0.640704C6.63656 0.230468 6.08016 0 5.5 0C4.91984 0 4.36344 0.230468 3.9532 0.640704C3.54297 1.05094 3.3125 1.60734 3.3125 2.1875V2.5H1.125V8.75C1.125 9.08152 1.2567 9.39946 1.49112 9.63388C1.72554 9.8683 2.04348 10 2.375 10H8.625C8.95652 10 9.27446 9.8683 9.50888 9.63388C9.7433 9.39946 9.875 9.08152 9.875 8.75V2.5H7.6875ZM1.75 3.125H9.25V8.75C9.25 8.91576 9.18415 9.07473 9.06694 9.19194C8.94973 9.30915 8.79076 9.375 8.625 9.375H2.375C2.20924 9.375 2.05027 9.30915 1.93306 9.19194C1.81585 9.07473 1.75 8.91576 1.75 8.75V3.125Z"
              fill="#37CFFF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

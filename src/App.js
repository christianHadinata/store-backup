import React from "react";
import Navbar from "./components/Navbar";
import AnimationCard from "./components/AnimationCard";
import ProductCard from "./components/ProductCard";
import ProductCategoryButton from "./components/ProductCategoryButton";
import HomeBigImage from "./components/HomeBigImage";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-[65px] ">
        <HomeBigImage />
      </div>
      <div className=" mt-16 ml-[117px]">
        <ProductCategoryButton />
      </div>

      <div className="flex justify-center">
        {/* ini nanti paling tampilan mobile nya dibikin kaya next-next gitu misal 3 3 */}
        <div className="mt-5 grid md:grid-cols-6 grid-cols-3 md:gap-28 gap-8 ">
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
        </div>
      </div>
      <div className="flex mt-20 justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-32 md:gap-y-20 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default App;

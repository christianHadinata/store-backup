import React from "react";
import Navbar from "./components/Navbar";
import AnimationCard from "./components/AnimationCard";
import ProductCard from "./components/ProductCard";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        {/* ini nanti paling tampilan mobile nya dibikin kaya next-next gitu misal 3 3 */}
        <div className="mt-36 grid md:grid-cols-6 grid-cols-3 md:gap-28 gap-8 ">
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
        </div>
      </div>
      <div className="flex mt-20 justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-28 gap-8">
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

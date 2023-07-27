import React from "react";
import Navbar from "./components/Navbar";
import AnimationCard from "./components/AnimationCard";
import ProductCard from "./components/ProductCard";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-around">
        <div className="mt-36 grid md:grid-cols-6 grid-cols-2 md:gap-28 gap-16">
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
        </div>
      </div>
      <div className="flex justify-evenly mt-20 cursor-pointer">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default App;

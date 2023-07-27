import React from "react";
import Navbar from "./components/Navbar";
import AnimationCard from "./components/AnimationCard";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-around">
        <div className="pt-36 grid md:grid-cols-6 grid-cols-2 md:gap-28 gap-16">
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
          <AnimationCard />
        </div>
      </div>
    </div>
  );
};

export default App;

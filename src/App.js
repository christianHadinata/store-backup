import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly pt-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Cards isHome={true} />
    </div>
  );
};

export default HomePage;

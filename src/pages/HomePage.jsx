import React from "react";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <main>
        <p>Welcome to our online store!</p>
      </main>
      <Cards isHome={true} />
    </div>
  );
};

export default HomePage;

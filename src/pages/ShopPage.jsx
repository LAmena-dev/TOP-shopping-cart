import React from "react";
import Cards from "../components/Cards";
import { useOutletContext } from "react-router";

const ShopPage = () => {
  const { setCartCount } = useOutletContext();

  return (
    <div>
      <h1>Shop Page</h1>
      <Cards isShop={true} setCartCount={setCartCount} />
    </div>
  );
};

export default ShopPage;

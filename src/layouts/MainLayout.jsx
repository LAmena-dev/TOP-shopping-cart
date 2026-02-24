import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCartItems } from "../apiServices/cartAPI";

const MainLayout = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      const data = await getCartItems();
      const totalItems = data.length;
      setCartCount(totalItems);
    };

    loadCart();
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cartCount, setCartCount }} />
    </div>
  );
};

export default MainLayout;

import React, { useState, useEffect } from "react";
import {
  getCartItems,
  deleteCartItem,
  updateCartItem,
} from "../apiServices/cartAPI";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCartItems();
        setCartItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleDelete = async (id) => {
    await deleteCartItem(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = async (id, quantity) => {
    if (quantity < 1) {
      await deleteCartItem(id);
      setCartItems((prev) => prev.filter((i) => i.id !== id));
      return;
    }

    const item = cartItems.find((i) => i.id === id);
    const updated = { ...item, quantity };

    setCartItems((prev) => prev.map((i) => (i.id === id ? updated : i)));
    await updateCartItem(id, updated);
  };

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={handleUpdateQuantity}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;

import { useState } from "react";
import { useOutletContext } from "react-router";
import {
  addCartItem,
  getCartItems,
  updateCartItem,
} from "../apiServices/cartAPI";

const ProductSection = ({ isShop = false, item }) => {
  const [product, setProduct] = useState(0);
  const [error, setError] = useState("");
  const { setCartCount } = useOutletContext();

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) setProduct(value);
  };

  const handleAddToCart = async () => {
    if (product <= 0) {
      setError("Enter a quantity more than 0");
      return;
    }
    setError("");

    const currentCart = await getCartItems();
    const existing = currentCart.find((i) => i.id === item.id);

    if (existing) {
      const updatedItem = {
        ...existing,
        quantity: existing.quantity + product,
      };
      await updateCartItem(existing.id, updatedItem);
    } else {
      const cartItem = { ...item, quantity: product };
      await addCartItem(cartItem);
      setCartCount((prev) => prev + 1);
    }

    setProduct(0);
  };

  return (
    <main>
      {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}
      {isShop ? (
        <input type="number" min="1" value={product} onChange={handleChange} />
      ) : (
        <p>Amount: {product}</p>
      )}
      <div>
        <button
          type="button"
          onClick={() => setProduct(product > 0 ? product - 1 : 0)}
        >
          -
        </button>
        <button type="button" onClick={() => setProduct(product + 1)}>
          +
        </button>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default ProductSection;

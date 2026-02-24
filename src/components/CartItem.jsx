import React from "react";

const CartItem = ({ item, onUpdate, onDelete }) => {
  console.log("Render:", item.title);
  return (
    <div>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button
        type="button"
        onClick={() => onUpdate(item.id, item.quantity - 1)}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => onUpdate(item.id, item.quantity + 1)}
      >
        +
      </button>
      <button type="button" onClick={() => onDelete(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;

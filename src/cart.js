import React from "react";

const Cart = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
      >
        {/* Cart icon SVG path */}
      </svg>
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default Cart;

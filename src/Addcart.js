import "./Main.css";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";
import cart from "./icon-cart.svg";
import { useState } from "react";

const Addcart = ({
  count,
  setCount,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
}) => {
  return (
    <div className="add-cart">
      <div className="counter">
        <button onClick={handleDecrement}>
          <img src={minus}></img>
        </button>
        <span className="button-span">{count}</span>
        <button onClick={handleIncrement}>
          <img src={plus}></img>
        </button>
      </div>
      <div className="btn">
        <button onClick={handleAddToCart} className="add-button">
          <img style={{ color: "#fff", paddingRight: "2rem" }} src={cart}></img>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Addcart;

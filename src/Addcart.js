import "./Main.css";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";
import cart from "./icon-cart.svg";

const Addcart = () => {
  return (
    <div className="add-cart">
      <div className="counter">
        <button>
          <img src={minus}></img>
        </button>
        <span className="button-span">0</span>
        <button>
          <img src={plus}></img>
        </button>
      </div>
      <div className="btn">
        <button className="add-button">
          <img style={{ color: "#fff", paddingRight: "2rem" }} src={cart}></img>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Addcart;

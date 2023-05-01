import "./Main.css";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";

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
    </div>
  );
};

export default Addcart;

import "./Nav.css";
import thumb from "./image-product-1-thumbnail.jpg";
import trashcan from "./icon-delete.svg";

const Cart = ({
  addItem,
  setAddItem,
  handleAddToCart,
  count,
  handleTrashCan,
}) => {
  return (
    <div className="cart">
      <p>Cart</p>
      <div className="cart-items">
        {addItem ? (
          <div>
            <div className="item-details">
              <img
                style={{ width: "5rem", height: "5rem", borderRadius: "1rem" }}
                src={thumb}
              ></img>
              <div className="item-description">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x
                  <span className="confirmation">{` ${count}    $${
                    count * 125
                  }`}</span>
                </p>
              </div>
              <img
                onClick={handleTrashCan}
                className="trash-can"
                src={trashcan}
              ></img>
            </div>
            <button className="checkout">checkout</button>
          </div>
        ) : (
          <div>
            <p className="empty">Your Cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

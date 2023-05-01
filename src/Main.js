import "./Main.css";
import mainImage from "./image-product-1.jpg";
import tn1 from "./image-product-1-thumbnail.jpg";
import tn2 from "./image-product-2-thumbnail.jpg";
import tn3 from "./image-product-3-thumbnail.jpg";
import tn4 from "./image-product-4-thumbnail.jpg";

const Main = () => {
  return (
    <main>
      <div className="left">
        <div className="main-image">
          <img
            style={{ width: "44.5rem", height: "44.5rem" }}
            src={mainImage}
          ></img>
        </div>
        <div className="thumbnails">
          <img style={{ width: "8.8rem", height: "8.8rem" }} src={tn1}></img>
          <img style={{ width: "8.8rem", height: "8.8rem" }} src={tn2}></img>
          <img style={{ width: "8.8rem", height: "8.8rem" }} src={tn3}></img>
          <img style={{ width: "8.8rem", height: "8.8rem" }} src={tn4}></img>
        </div>
      </div>
      <div className="right">
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="pricing">
          <p>&#36; 125.00</p>
          <p>50%</p>
          <p>&#36; 250.00</p>
        </div>
      </div>
    </main>
  );
};

export default Main;

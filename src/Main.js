import "./Main.css";
import Addcart from "./Addcart";
import { useState, useEffect, useRef } from "react";
import mainImage from "./image-product-1.jpg";
import tn1 from "./image-product-1-thumbnail.jpg";
import tn2 from "./image-product-2-thumbnail.jpg";
import tn3 from "./image-product-3-thumbnail.jpg";
import tn4 from "./image-product-4-thumbnail.jpg";
import image2 from "./image-product-2.jpg";
import image3 from "./image-product-3.jpg";
import image4 from "./image-product-4.jpg";

const Main = () => {
  const [myImage, setMyImage] = useState("mainImage");

  const imageItems = document.querySelectorAll(".thumbnails img");

  const handleImageChange = (param) => {
    setMyImage(param);
    console.log(imageItems[0]);
  };

  useEffect(() => {
    imageItems.forEach((image) => {
      if (myImage == "mainImage") {
        imageItems[0].classList.add("selected");
        imageItems[1].classList.remove("selected");
        imageItems[2].classList.remove("selected");
        imageItems[3].classList.remove("selected");
      } else if (myImage == "tn2") {
        imageItems[0].classList.remove("selected");
        imageItems[1].classList.add("selected");
        imageItems[2].classList.remove("selected");
        imageItems[3].classList.remove("selected");
      } else if (myImage == "tn3") {
        imageItems[0].classList.remove("selected");
        imageItems[1].classList.remove("selected");
        imageItems[2].classList.add("selected");
        imageItems[3].classList.remove("selected");
      } else if (myImage == "tn4") {
        imageItems[0].classList.remove("selected");
        imageItems[1].classList.remove("selected");
        imageItems[2].classList.remove("selected");
        imageItems[3].classList.add("selected");
      }
    });
  }, [myImage]);

  return (
    <main>
      <div className="left">
        <div className="main-image">
          {myImage == "mainImage" ? (
            <img
              src={mainImage}
              style={{ width: "40rem", height: "40rem" }}
            ></img>
          ) : myImage == "tn2" ? (
            <img src={image2} style={{ width: "40rem", height: "40rem" }}></img>
          ) : myImage == "tn3" ? (
            <img src={image3} style={{ width: "40rem", height: "40rem" }}></img>
          ) : myImage == "tn4" ? (
            <img src={image4} style={{ width: "40rem", height: "40rem" }}></img>
          ) : (
            <img
              src={mainImage}
              style={{ width: "40rem", height: "40rem" }}
            ></img>
          )}
        </div>
        <div className="thumbnails">
          <img
            onClick={() => handleImageChange("mainImage")}
            style={{ width: "8rem", height: "8rem" }}
            src={tn1}
            className="selected"
          ></img>
          <img
            onClick={() => handleImageChange("tn2")}
            style={{ width: "8rem", height: "8rem" }}
            src={tn2}
          ></img>
          <img
            onClick={() => handleImageChange("tn3")}
            style={{ width: "8rem", height: "8rem" }}
            src={tn3}
          ></img>
          <img
            onClick={() => handleImageChange("tn4")}
            style={{ width: "8rem", height: "8rem" }}
            src={tn4}
          ></img>
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
          <div style={{ display: "flex" }}>
            <p className="price-discount">&#36; 125.00</p>
            <p className="discount">50%</p>
          </div>

          <p className="price-actual">&#36; 250.00</p>
        </div>
        <Addcart />
      </div>
    </main>
  );
};

export default Main;

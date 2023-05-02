import Nav from "./Nav";
import Main from "./Main";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function App() {
  //NAVBAR JAVASCRIPT
  const [hamburger, Sethamburger] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [borderColor, setBorderColor] = useState(null);
  const listItems = document.querySelectorAll("nav ul li");
  const [addItem, setAddItem] = useState(false);

  const handleHamButtonClick = () => {
    Sethamburger(!hamburger);
    if (bgColor == "white") {
      setBgColor("black");
    } else {
      setBgColor("white");
    }
  };

  const handleMenuHover = (e) => {
    const index = [...e.target.parentNode.children].indexOf(e.target);
    setBorderColor(index);
  };

  const handleMenuMouseLeave = (e) => {
    listItems.forEach((item) => {
      const index = [...e.target.parentNode.children].indexOf(e.target);
      setBorderColor(!index);
      console.log(item);
    });
  };

  useEffect(() => {
    document.body.className = `bg-${bgColor}`;
    listItems.forEach((item, index) => {
      if (index === borderColor) {
        item.classList.add("orange");
      } else {
        item.classList.remove("orange");
      }
    });
  }, [bgColor, borderColor]);

  const handleCartButton = () => {
    document.querySelector(".cart").classList.toggle("show");
  };

  const handleTrashCan = () => {
    setAddItem(false);
    document.querySelector(".items-count").classList.remove("show");
    document.querySelector(".items-count").textContent = "";
  };

  const handleMainImageClick = () => {
    document.querySelector(".modal").classList.add("show");
    document.querySelector("main").classList.add("hide");
    document.querySelector("nav").classList.add("hide");
    document.querySelector("body").classList.add("bg-black");
  };

  const handleModalCloseButton = () => {
    document.querySelector(".modal").classList.remove("show");
    document.querySelector("main").classList.remove("hide");
    document.querySelector("nav").classList.remove("hide");
    document.querySelector("body").classList.remove("bg-black");
  };

  //NAVBAR JAVASCRIPT ENDS

  //MAIN JAVASCRIPT
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
  //MAIN JAVASCRIPT ENDS

  //ADDCART JAVASCRIPT
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (count == 0) return;
    document.querySelector(".items-count").classList.add("show");
    document.querySelector(".items-count").textContent = count;
    setAddItem(true);
  };

  //ADDCART JAVASCRIPT ENDS

  //MODAL JAVASCRIPT

  const [modalImage, setModalImage] = useState("mainImage");

  const handleImageChange2 = (param) => {
    setModalImage(param);
  };

  const images = ["mainImage", "tn2", "tn3", "tn4"];

  const handleNextButton = () => {
    const currentIndex = images.indexOf(modalImage);
    let nextIndex = 0;
    if (currentIndex == images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    setModalImage(images[nextIndex]);
    console.log("next");
  };
  const handlePreviousButton = () => {
    const currentIndex = images.indexOf(modalImage);
    let prevIndex = 0;
    if (currentIndex == 0) {
      prevIndex = images.length - 1;
    } else {
      prevIndex = currentIndex - 1;
    }
    setModalImage(images[prevIndex]);
    console.log("previous");
  };

  //MODAL JAVASCRIPT ENDS

  return (
    <div className="App">
      <Nav
        handleHamButtonClick={handleHamButtonClick}
        hamburger={hamburger}
        Sethamburger={Sethamburger}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        handleMenuHover={handleMenuHover}
        handleMenuMouseLeave={handleMenuMouseLeave}
        count={count}
        handleCartButton={handleCartButton}
        addItem={addItem}
        setAddItem={setAddItem}
        handleAddToCart={handleAddToCart}
        handleTrashCan={handleTrashCan}
      />
      <Main
        myImage={myImage}
        setMyImage={setMyImage}
        imageItems={imageItems}
        handleImageChange={handleImageChange}
        count={count}
        setCount={setCount}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleAddToCart={handleAddToCart}
        handleMainImageClick={handleMainImageClick}
      />
      <Modal
        handleImageChange2={handleImageChange2}
        modalImage={modalImage}
        setModalImage={setModalImage}
        handleMainImageClick={handleMainImageClick}
        handleModalCloseButton={handleModalCloseButton}
        handleNextButton={handleNextButton}
        handlePreviousButton={handlePreviousButton}
      />
    </div>
  );
}

export default App;

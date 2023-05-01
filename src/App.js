import Nav from "./Nav";
import Main from "./Main";
import { useState, useEffect } from "react";

function App() {
  //NAVBAR JAVASCRIPT
  const [hamburger, Sethamburger] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [borderColor, setBorderColor] = useState(null);
  const listItems = document.querySelectorAll("nav ul li");

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
    document.querySelector(".items-count").classList.add("show");
    document.querySelector(".items-count").textContent = count;
  };

  //ADDCART JAVASCRIPT ENDS

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
      />
    </div>
  );
}

export default App;

import Nav from "./Nav";
import Main from "./Main";
import { useState, useEffect } from "react";

function App() {
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
      />
      <Main />
    </div>
  );
}

export default App;

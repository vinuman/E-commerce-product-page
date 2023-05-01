import Nav from "./Nav";
import Main from "./Main";
import { useState, useEffect } from "react";

function App() {
  const [hamburger, Sethamburger] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [borderColor, setBorderColor] = useState(null);

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

  useEffect(() => {
    document.body.className = `bg-${bgColor}`;
    const listItems = document.querySelectorAll("nav ul li");
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
      />
      <Main />
    </div>
  );
}

export default App;

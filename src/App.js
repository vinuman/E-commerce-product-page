import Nav from "./Nav";
import { useState, useEffect } from "react";

function App() {
  const [hamburger, Sethamburger] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleHamButtonClick = () => {
    Sethamburger(!hamburger);
    if (bgColor == "white") {
      setBgColor("black");
    } else {
      setBgColor("white");
    }
  };

  useEffect(() => {
    document.body.className = `bg-${bgColor}`;
  }, [bgColor]);

  return (
    <div className="App">
      <Nav
        handleHamButtonClick={handleHamButtonClick}
        hamburger={hamburger}
        Sethamburger={Sethamburger}
      />
    </div>
  );
}

export default App;

import "./Nav.css";
import logo from "./logo.svg";
import cart from "./icon-cart.svg";
import profilePic from "./image-avatar.png";
import Hamburger from "./Hamburger";

const Nav = ({
  handleHamButtonClick,
  hamburger,
  Sethamburger,
  handleMenuHover,
}) => {
  return (
    <nav>
      <Hamburger
        handleHamButtonClick={handleHamButtonClick}
        hamburger={hamburger}
        Sethamburger={Sethamburger}
      />
      <div className="left">
        <img src={logo}></img>
        <ul>
          <li onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
            Collections
          </li>
          <li onMouseOver={handleMenuHover} onMouseLeave={handleMenuHover}>
            Men
          </li>
          <li onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
            Women
          </li>
          <li onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
            About
          </li>
          <li onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
            Contact
          </li>
        </ul>
      </div>
      <div className="right">
        <img style={{ width: "2rem", height: "2rem" }} src={cart}></img>
        <img
          className="profile-pic"
          style={{ width: "5rem", height: "5rem" }}
          src={profilePic}
        ></img>
      </div>
    </nav>
  );
};

export default Nav;

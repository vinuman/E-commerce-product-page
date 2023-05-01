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
  handleMenuMouseLeave,
  count,
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
          <li onMouseOver={handleMenuHover} onMouseLeave={handleMenuMouseLeave}>
            Collections
          </li>
          <li
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuMouseLeave}
          >
            Men
          </li>
          <li
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuMouseLeave}
          >
            Women
          </li>

          <li
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuMouseLeave}
          >
            About
          </li>
          <li
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuMouseLeave}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="right">
        <img style={{ width: "2rem", height: "2rem" }} src={cart}></img>
        <span className="items-count">{count}</span>
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

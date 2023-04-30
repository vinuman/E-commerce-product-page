import "./Nav.css";

const Hamburger = ({ handleHamButtonClick, hamburger, Sethamburger }) => {
  return (
    <div>
      {hamburger ? (
        <div className="modal-nav">
          <div onClick={handleHamButtonClick} className="hamburder">
            <div
              style={{
                transform: "rotate(45deg)",
                position: "absolute",
              }}
              className="lines"
            ></div>
            <div style={{ display: "none" }} className="lines"></div>
            <div
              style={{
                transform: "rotate(135deg)",
                position: "absolute",
              }}
              className="lines"
            ></div>
          </div>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        <div onClick={handleHamButtonClick} className="hamburder">
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;

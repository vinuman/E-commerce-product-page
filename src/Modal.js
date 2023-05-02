import close from "./icon-close.svg";
import "./Modal.css";
import mainImage from "./image-product-1.jpg";
import tn1 from "./image-product-1-thumbnail.jpg";
import tn2 from "./image-product-2-thumbnail.jpg";
import tn3 from "./image-product-3-thumbnail.jpg";
import tn4 from "./image-product-4-thumbnail.jpg";
import image2 from "./image-product-2.jpg";
import image3 from "./image-product-3.jpg";
import image4 from "./image-product-4.jpg";
import previous from "./icon-previous.svg";
import next from "./icon-next.svg";

const Modal = ({
  handleImageChange2,
  modalImage,
  setmodalImage,
  handleMainImageClick,
}) => {
  return (
    <div className="modal">
      <img className="close" src={close}></img>
      <div className="main-image-container">
        <div className="modal-buttons">
          <img src={previous}></img>
          <img src={next}></img>
        </div>
        {modalImage == "mainImage" ? (
          <img style={{ width: "100%", height: "auto" }} src={mainImage}></img>
        ) : modalImage == "tn2" ? (
          <img src={image2} style={{ width: "100%", height: "auto" }}></img>
        ) : modalImage == "tn3" ? (
          <img src={image3} style={{ width: "100%", height: "auto" }}></img>
        ) : modalImage == "tn4" ? (
          <img src={image4} style={{ width: "100%", height: "auto" }}></img>
        ) : (
          <img style={{ width: "100%", height: "auto" }} src={mainImage}></img>
        )}
      </div>
      <div className="thumbnails">
        <img
          onClick={() => handleImageChange2("mainImage")}
          style={{ width: "8rem", height: "8rem" }}
          src={tn1}
          className="selected"
        ></img>
        <img
          onClick={() => handleImageChange2("tn2")}
          style={{ width: "8rem", height: "8rem" }}
          src={tn2}
        ></img>
        <img
          onClick={() => handleImageChange2("tn3")}
          style={{ width: "8rem", height: "8rem" }}
          src={tn3}
        ></img>
        <img
          onClick={() => handleImageChange2("tn4")}
          style={{ width: "8rem", height: "8rem" }}
          src={tn4}
        ></img>
      </div>
    </div>
  );
};

export default Modal;

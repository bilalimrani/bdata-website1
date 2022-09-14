import React from "react";
import BookImgWrapper from "./BookImg.style";
const LogoHeader = require("public/img/bdataLogo.svg");

const BookImg = ({ title, img }) => {
  return (
    <>
      <BookImgWrapper>
        <div className="header-area">
          <img className="img w-100" src={LogoHeader}></img>
          <h6 className="fw-bold">{title}</h6>
          {/* <p>Craete Trusted network for devices.</p> */}
        </div>
        <div className="img-area">
          <img className="img w-100" src={img}></img>
        </div>
        <div className="bottom-area">
          <p className="fw-bold text-center yellow-text m-0">
            BDATA Solution Inc
          </p>
          <p className="fw-bold text-center yellow-text m-0 p-0">
            info@Bdata.ca
          </p>
        </div>
      </BookImgWrapper>
    </>
  );
};

export default BookImg;

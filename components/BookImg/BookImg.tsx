import React from "react";
import BookImgWrapper from "./BookImg.style";
const LogoHeader = require("public/img/Newlogo.png");
const CenterImg = require("public/img/bg.jpg");

const BookImg = () => {
  return (
    <>
      <BookImgWrapper>
        <div className="header-area">
          <img className="img w-100" src={LogoHeader}></img>
          <h6 className="fw-bold">
            Advance Cyber Security for Critical Infrastructure
          </h6>
          <p>Craete Trusted network for devices.</p>
        </div>
        <div className="img-area">
          <img className="img w-100" src={CenterImg}></img>
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

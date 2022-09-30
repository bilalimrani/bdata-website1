import React from "react";
import Image from "next/image";
import BookWrapper from "../../../styles/styledComponents/BookWrapper.style";

const logoImg = require("public/img/favicon.png");
const telus = require("public/img/telus.svg");
const netlify = require("public/img/netlify.svg");

export default function SolutionPartner() {
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
        <BookWrapper>
          <Image
            src={logoImg}
            className="w-100"
            height="16px"
            alt="bdata"
            width="14px"
          />
          <div className="custom-card-body">
            <div className="card-body-inner-img">
              <Image
                src={telus}
                className="w-100"
                height="87px"
                alt="bdata"
                width="155px"
              />
            </div>
            <div className="card-title">
              <p>Solution Partner</p>
            </div>
          </div>
        </BookWrapper>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
        <BookWrapper>
          <Image
            src={logoImg}
            className="w-100"
            height="16px"
            alt="bdata"
            width="14px"
          />
          <div className="custom-card-body">
            <div className="card-body-inner-img">
              <Image
                src={netlify}
                className="w-100"
                height="64px"
                alt="bdata"
                width="196px"
              />
            </div>
            <div className="card-title">
              <p>Solution Partner</p>
            </div>
          </div>
        </BookWrapper>
      </div>
    </div>
  );
}

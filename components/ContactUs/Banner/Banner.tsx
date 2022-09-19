import React from "react";
// import Image from "next/image";
import { BannerWrapper, Button } from "./Banner.style";
const contact3 = require("public/img/contact3.gif");
// const icon1 = require("public/img/main-asset.svg");
// const bdataPattern = require("public/img/logohalf.svg");

export default function Banner() {
  return (
    <BannerWrapper>
      <img src={contact3} alt="" />
      <div className="banner-content-wrapper">
        <h2 className="fw-bold text-center">
          Contact us to achieve Cyber Resilience
        </h2>
      </div>

      <Button
        target="_blank"
        href="https://demo.org.bdata.ca"
        className="btn btn-light"
      >
        Start free trial
      </Button>
    </BannerWrapper>
  );
}

import React from "react";
import { BannerWrapper, Button } from "./Banner.style";
const icon1 = require("public/img/main-asset.svg");
const bdataPattern = require("public/img/logohalf.svg");

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">Contact BDATA</h2>
          
        </div>
      </div>
      <Button className="btn btn-light">Start free trial</Button>
    </BannerWrapper>
  );
}

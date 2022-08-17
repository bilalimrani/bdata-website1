import React from "react";
import { BannerWrapper, Button } from "./Banner.style";
const icon1 = require("public/img/main-asset.svg");
const bdataPattern = require("public/img/logohalf.svg");

export default function Banner() {
  return <BannerWrapper>
    <div className="row align-items-center">
      <div className="col-sm">
        <img src={bdataPattern} className="pattern" />
      </div>
      <div className="col-sm">
        <div className="heading">Contact BDATA</div>
        <Button className="btn btn-light">Start free trial</Button>
      </div>
      <div className="col-sm">
        <img src={icon1} className="icon1"/>

      </div>
    </div>
  </BannerWrapper>;
}

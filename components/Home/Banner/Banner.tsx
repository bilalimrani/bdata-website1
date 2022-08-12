import React from "react";
import { BannerWrapper, Button } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">
            Zero Trust Technology for Network Security
          </h2>
          <Button className="btn btn-light">Start free trial</Button>
        </div>
      </div>
    </BannerWrapper>
  );
}

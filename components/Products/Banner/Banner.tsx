import React from "react";
import { BannerWrapper, Button } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">BDATA Products</h2>
        </div>
      </div>
      <Button className="btn btn-light">Start free trial</Button>
    </BannerWrapper>
  );
}

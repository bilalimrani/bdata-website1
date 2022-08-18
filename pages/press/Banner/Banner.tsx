import React from "react";
import { BannerWrapper,Button } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold text-center">Press</h2>
          <Button className="btn btn-light">Start Free Trial</Button>
        </div>
      </div>
    </BannerWrapper>
  );
}

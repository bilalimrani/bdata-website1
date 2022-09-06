import React from "react";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/pressBanner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold text-center">Press</h2>
          
        </div>
      </div>
      <Button className="btn btn-light">Start Free Trial</Button>
    </BannerWrapper>
  );
}

import React from "react";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/industriesBanner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold text-center">Our Industries</h2>
          
        </div>
      </div>
      <Button className="btn btn-light">Start Free Trial</Button>
    </BannerWrapper>
  );
}

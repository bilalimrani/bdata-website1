import React from "react";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/resourcesBanner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">BDATA Resources</h2>
          <Button className="btn btn-light">Start free trial</Button>
        </div>
      </div>
    </BannerWrapper>
  );
}

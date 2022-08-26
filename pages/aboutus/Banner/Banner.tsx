import React from "react";
import { BannerWrapper } from "../../../styles/styledComponents/aboutusBanner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">About BDATA</h2>
          <p>We are experience team of experts in offensive and in defensive security implementation and product development.</p>
          <p>We are passionate and aligned on our mission to deliver multilayer and robust cyber security that is affordable and accessible to all</p> 
        </div>
      </div>
    </BannerWrapper>
  );
}

import React from "react";
import { BannerWrapper, Button } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">
          About BDATA
          </h2>
          <p>We secure business and industries from Cyber Attacks</p>
        </div>
      </div>
    </BannerWrapper>
  );
}

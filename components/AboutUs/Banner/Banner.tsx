import React from "react";
import { BannerWrapper } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner">
        </div>
        <div className="banner-content-wrapper">
          <h2 className="fw-bold heading">
            About Bdata
          </h2>
          <p>We secure business and industries from Cyber Attacks</p>
        </div>
      </div>
    </BannerWrapper>
  );
}

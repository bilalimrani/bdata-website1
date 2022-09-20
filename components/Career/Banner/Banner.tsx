import React from "react";
import { BannerWrapper } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold heading m-0">
            Career
          </h2>
          <p className="m-0 mt-2"> BDATA is a community of people who believe in the power of data to change the world, and ready to challenge the complexity and inadequacy of conventional approaches in pursuit of better answers to the world's toughest challenges.</p>
        </div>
      </div>
    </BannerWrapper>
  );
}

import React from "react";
import { BannerWrapper } from "../../../styles/styledComponents/aboutusBanner.style";
import aboutUsConstant from "../../../utils/aboutUs.constants";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">{aboutUsConstant.banner.title}</h2>
          <p>{aboutUsConstant.banner.subTitle1}</p>
          <p>{aboutUsConstant.banner.subTitle2}</p>
        </div>
      </div>
    </BannerWrapper>
  );
}

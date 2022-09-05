import React from "react";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/resourcesBanner.style";

import resroucesConstant from "../../../utils/resources.constants";

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">{resroucesConstant.banner.title}</h2>
          <p>{resroucesConstant.banner.subTitle}</p>
        </div>
      </div>
    </BannerWrapper>
  );
}

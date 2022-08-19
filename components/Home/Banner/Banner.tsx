import React from "react";
import { BannerWrapper, Button } from "./Banner.style";

export default function Banner({ data = {}, sideImage = true }) {
  const { bgImage, title, subTitle }: any = data;
  return (
    <BannerWrapper
      sideImage={sideImage}
      style={{ background: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">{title}</h2>
          {subTitle && <p>{subTitle}</p>}
          <Button className="btn btn-light">Start free trial</Button>
        </div>
      </div>
    </BannerWrapper>
  );
}

import React from "react";
import { BannerWrapper, Button, Container } from "./Banner.style";

export default function Banner(props) {
  const { title, bgImage, sideImage } = props;
  return (
    <Container>
      <BannerWrapper bgImage={bgImage} sideImage={sideImage}>
        <div className="container">
          <div className="banner-content-wrapper">
            <h2 className="fw-bold">{title}</h2>
            <Button className="btn btn-light">Start free trial</Button>
          </div>
        </div>
      </BannerWrapper>
    </Container>
  );
}

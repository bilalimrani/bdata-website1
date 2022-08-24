import React from "react";
import Video from "react-player";
import { BannerWrapper, A } from "./Banner.style";

export default function Banner({ data = {}, sideImage = true }) {
  const { bgImage, title, subTitle }: any = data;
  return (
    <BannerWrapper
    // sideImage={sideImage}
    // style={{
    //   background: `url(${bgImage})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <video autoPlay muted loop>
        <source
          type="video/mp4"
          src="https://video-private-assets.canva.com/VAFKOTBjKQI/v/2fd18a1fcd.mp4?exp=1661343780000&cf-ck=kmYWpPT7646P3_jv7FKyDPG551pQLzr6FEnYVAIKOTI&cf-sig=6gDyIoWzuCJhWE-vsYdLP1tN5DpWH6wxz8KIPRFik_U&cf-sig-kid=CO7cCjZ_YiI=&sig=cnUvijrhgnh9-6FJmFhGZeRreALhDdOM-ZkOLT5pbPU&sig-kid=GzFgFdhXD-Q="
        />
      </video>
      {/* <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">{title}</h2>
          {subTitle && <p>{subTitle}</p>}
          <A
            href="https://demo.org.bdata.ca"
            target="_blank"
            className="btn btn-light"
          >
            Start free trial
          </A>
        </div>
      </div> */}
    </BannerWrapper>
  );
}

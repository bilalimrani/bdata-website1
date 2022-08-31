import React from "react";
// import ReactPlayer from "react-player";
import { BannerWrapper, A } from "./Banner.style";
// import BannerVideo from "../../../public/img/homeBanner.mp4";

export default function Banner({ data = {}, sideImage = true }) {
  const { bgImage, title, subTitle }: any = data;
  // const BannerVideo = require("public/img/homeBanner.mp4");
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
      {/* <video autoplay muted loop id="myVideo">
        <source src={BannerVideo} type="video/mp4">
        Your browser does not support HTML5 video.
      </video> */}
      {/* <ReactPlayer url={BannerVideo} /> */}

      {/* <img src="../../../public/img/homeBanner.gif" /> */}

      <video autoPlay loop muted>
        <source
          type="video/mp4"
          src="https://s3.ca-central-1.amazonaws.com/dev.bdata.ca/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(1).mp4"
        />
      </video>
      <A
        href="https://demo.org.bdata.ca"
        target="_blank"
        className="btn btn-light"
      >
        Start free trial
      </A>
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
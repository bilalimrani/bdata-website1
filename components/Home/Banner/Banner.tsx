import React from "react";
// import ReactPlayer from "react-player";
import { BannerWrapper, A } from "./Banner.style";
// import BannerVideo from "../../../public/img/homeBanner.mp4";
import homeConstants from "../../../utils/home.constants";

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
      {/* <ReactPlayer url={BannerVideo} /> */}

      <img src="../../../public/img/homeBanner.gif" />

      {/* <video autoPlay loop muted>
        <source
          type="video/mp4"
          src="https://res.cloudinary.com/dzyw7ozvf/video/upload/v1661409304/website_VIDEO_xwwqsv.mp4"
        />
      </video> */}
      <A
        href="https://demo.org.bdata.ca"
        target="_blank"
        className="btn btn-light"
      >
       {homeConstants.banner.button}
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

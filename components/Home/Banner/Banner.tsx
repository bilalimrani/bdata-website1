import React from "react";
import AnimatedText from "react-animated-text-content";
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
          src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(3).mp4"
        />
      </video>
      <div className="overlay">
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Content to animate
        </AnimatedText>
      </div>
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

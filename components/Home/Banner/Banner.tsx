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
      {/* <ReactPlayer url={BannerVideo} /> */}
      
      <video autoPlay loop muted>
        <source  type="video/mp4"
          src="https://video-private-assets.canva.com/VAFKOTBjKQI/v/2fd18a1fcd.mp4?exp=1661361780000&cf-ck=kmYWpPT7646P3_jv7FKyDPG551pQLzr6FEnYVAIKOTI&cf-sig=4mjY-PWbZ3RfT_U1MdF8HOS9nHd1JKoo067ir4jL1_8&cf-sig-kid=CO7cCjZ_YiI=&sig=JTrvrR71v8kUmc7rWfsuXQuAPXTAq3-sRd0MqNPig6I&sig-kid=GzFgFdhXD-Q="/>

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

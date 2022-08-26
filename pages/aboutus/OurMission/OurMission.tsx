import React from "react";
import MissionWrapper from "./OurMission.style";
import Image from "next/image";

const OurMissionImg = require("public/img/AboutUsPageSvg.svg");

export default function OurMission() {
  return (
    <div className="container">
      <MissionWrapper>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="img-Wrapper">
              {/* <Image
                src={OurMissionImg}
                width="100%"
                height="485px"
                className="img-responsive"
              /> */}
              <img src={OurMissionImg} className="w-100" height="485px" alt=""/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="head-wrapper mb-5">
              <h3 className="fw-bold">Our Mission</h3>
              <p>At BDATA, We are on a mission to provide a password less robust machine based multilayer cyber security soulution that is affordable for customers to achive offensive and defensive cyber security.</p>
            </div>
            {/* <div className="head-wrapper mb-5">
              <h3 className="fw-bold">Our Vision</h3>
              <p>We secure business and industries from Cyber Attacks</p>
            </div> */}
          </div>
        </div>
      </MissionWrapper>
    </div>
  );
}

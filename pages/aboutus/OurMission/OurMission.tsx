import React from "react";
import MissionWrapper from "./OurMission.style";
import Image from "next/image";

const OurMissionImg = require("public/img/ourMission1.png");

export default function OurMission() {
  return (
    <MissionWrapper>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-7">
          <div className="img-Wrapper">
            <Image
              src={OurMissionImg}
              width="100%"
              height="485px"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-5">
          <div className="head-wrapper mb-5">
            <h2 className="fw-bold">Our Mission</h2>
            <p>We secure business and industries from Cyber Attacks</p>
          </div>
          <div className="head-wrapper mb-5">
            <h2 className="fw-bold">Our Vision</h2>
            <p>We secure business and industries from Cyber Attacks</p>
          </div>
        </div>
      </div>
    </MissionWrapper>
  );
}

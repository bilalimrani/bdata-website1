import React from "react";
import Image from "next/image";
import MissionWrapper from "./OurMission.style";
import aboutUsConstant from "../../../utils/aboutUs.constants";

const OurMissionImg = require("public/img/ourmission.gif");

export default function OurMission() {
  return (
    <div className="container">
      <MissionWrapper>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="img-Wrapper">
              <Image
                src={OurMissionImg}
                className="w-100"
                height="485px"
                alt="bdata"
                width="100%"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="head-wrapper mb-5">
              <h3 className="fw-bold">{aboutUsConstant.mission.title}</h3>
              <p>{aboutUsConstant.mission.subTitle}</p>
            </div>
          </div>
        </div>
      </MissionWrapper>
    </div>
  );
}

import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/pressLightWeightSection.style";
const microservice = require("public/img/microservice.png");
const lionliar = require("public/img/lionliar.png");
const telus = require("public/img/telus.png");
const bdata = require("public/img/team-bdata.png");
const secndPlace = require("public/img/2ndPlace.png");

export default function LightWeightSection() {
  return (
    <LightWeightSectionWrapper>
      <InfoArea>
        {/* <SideImage src="https://i.ibb.co/MV2SwwN/Group-1679-1.png" /> */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" src={microservice}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Collaboration with Supermicro computer Inc.
                </h3>
                <p className="custom-padding m-0">
                  BDATA Solution and Supermicro computerInc are collaborating to
                  offer the one of it’s kind, multi-layared end to end highly
                  secured Blockchain IOT (BIOT) embeded Gateway Devices to
                  provide data immulability and secure connectivity for critical
                  assets remote monitering and operation in iol and gas, power,
                  defence, health care and smart city projects.
                </p>
                <Button
                  href="https://innovationfactory.ca/bdata-solutions-and-supermicro-computer-inc-announces-partnership/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={lionliar} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  BDATA win top prizes in Lions Lair competition
                </h3>
                <p className="custom-padding m-0">
                  BDATA Solution won the 2nd prices in Innovation factory’s
                  annual Lions Lair pitch competition sixteen innovativestartups
                  pitch to three industry - leading judges and a television
                  audience during the virtual bracket style tournament that took
                  place on september 21-24.
                </p>
                <Button
                  className="btn btn-primary"
                  href="https://theforge.mcmaster.ca/imaginable-solutions-and-bdata-win-top-prizes-in-lions-lair/"
                  target="_blank"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" src={telus} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9  py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Collaboration with Telus
                </h3>
                <p className="custom-padding m-0">
                  BDATA Solutions Inc is collaborating with Telus to implement
                  blockchain connectivity of IOT devices using BDATA-Blockchain
                  on Telus 4G/5G network in canada. This provides password-less
                  highly secure and desirable intelligent plant management
                  system (IPMS) as an industry 4.0 platform to process
                  industries.
                </p>
                <Button
                  href="https://theforge.mcmaster.ca/b-data-solutions-and-telus-collaboration/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12  col-lg-4 col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={bdata}></img>
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Congratulation Team BDATA
                </h3>
                <p className="custom-padding m-0">
                  We are now in SEMI-FInal Canadian export challenge. Register
                  to watch live ‘16 september 10:30 AM - Pitch Compitition
                </p>
                <Button
                  href="https://www.startupcan.ca/cxc-ontario/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" src={secndPlace} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Win 2nd Place
                </h3>
                <p className="custom-padding m-0">
                  BDATA is collaborating with Telus to implement connectivity of
                  IoT devices using BDATA-Blockchain on TELUS 4G/5G network in
                  Canada.
                </p>
                <Button
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6857381812528799744/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
        </div>
      </InfoArea>
    </LightWeightSectionWrapper>
  );
}

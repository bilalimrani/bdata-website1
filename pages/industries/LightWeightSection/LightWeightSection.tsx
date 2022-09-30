import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/industriesLightWeightSection.style";
import industriesConstants from "../../../utils/industries.constants";
const telecom = require("public/img/telecom.png");
const defence = require("public/img/defense.png");
const oilgas = require("public/img/oil&gas.png");
const utilities = require("public/img/utilities.png");

export default function LightWeightSection() {
  return (
    <LightWeightSectionWrapper className="">
      <InfoArea>
        {/* <SideImage src="https://i.ibb.co/MV2SwwN/Group-1679-1.png" /> */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" alt="bdata" src={telecom}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {industriesConstants.lightWeightSection.section1.title}
                </h3>
                <p className="custom-padding m-0">
                  {industriesConstants.lightWeightSection.section1.subTitle}
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" alt="bdata" src={defence} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {industriesConstants.lightWeightSection.section2.title}
                </h3>
                <p className="custom-padding m-0">
                  {industriesConstants.lightWeightSection.section2.subTitle}
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" alt="bdata" src={oilgas} />
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {industriesConstants.lightWeightSection.section3.title}
                </h3>
                <p className="custom-padding m-0">
                  {industriesConstants.lightWeightSection.section3.subTitle}
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12  col-lg-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" alt="bdata" src={utilities}></img>
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {industriesConstants.lightWeightSection.section4.title}
                </h3>
                <p className="custom-padding m-0">
                  {industriesConstants.lightWeightSection.section4.subTitle}
                </p>
                <Button type="button" className="btn btn-primary">
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

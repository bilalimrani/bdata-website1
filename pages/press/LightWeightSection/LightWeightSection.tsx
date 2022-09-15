import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/pressLightWeightSection.style";
import BookImg from "../../../components/BookImg/BookImg";
import pressConstant from "../../../utils/press.constants";
const microservice = require("public/img/microservice.png");
const lionliar = require("public/img/lionliar.png");
const telus = require("public/img/telus.png");
const press4 = require("public/img/4press.svg");
const press5 = require("public/img/5press.svg");

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
                  {pressConstant.section1.title}
                </h3>
                <p className="custom-padding m-0">
                  {pressConstant.section1.subTitle}
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
                  {pressConstant.section2.title}
                </h3>
                <p className="custom-padding m-0">
                  {pressConstant.section2.subTitle}
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
                  {pressConstant.section3.title}
                </h3>
                <p className="custom-padding m-0">
                  {pressConstant.section3.subTitle}
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
              <BookImg title={pressConstant.section4.title} img={press4} />
            </div>
            <div className="col-12  col-lg-8 col-xl-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {pressConstant.section4.title}
                </h3>
                <p className="custom-padding m-0">
                  {pressConstant.section4.subTitle}
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
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <BookImg title={pressConstant.section5.title} img={press5} />
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3
                  className="text-left m-0 custom-padding fw-bold"
                  dangerouslySetInnerHTML={{
                    __html: pressConstant.section5.title,
                  }}
                ></h3>
                <p className="custom-padding m-0">
                  {pressConstant.section5.subTitle}
                </p>
                <Button
                  href="https://www.marketwatch.com/press-release/secure-edge-connectivity-bundle-is-a-secure-cost-effective-and-off-the-shelf-solution-which-provides-cyber-resilience-global-connectivity-and-endpoint-management-for-mission-critical-iot-projects-2022-09-14?mod=search_headline"
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

import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/caseStudyLightWeightSection.style";
const telecom = require("public/img/telecom.png");
const defence = require("public/img/defence.png");
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
                <img className="img w-100" src={telecom}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 1
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
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
                <img className="img w-100" src={defence} />
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8  col-xl-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 2
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
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
                <img className="img w-100" src={oilgas} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 3
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4  col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={utilities}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8  col-xl-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 4
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
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

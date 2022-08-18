import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
  UL,
} from "./LightWeightSection.style";
const Frame78 = require("public/img/rectangle.png");

export default function LightWeightSection() {
  return (
    <LightWeightSectionWrapper className="">
      <InfoArea>
        {/* <SideImage src="https://i.ibb.co/MV2SwwN/Group-1679-1.png" /> */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-9 py-2">
              <ContainerDefault>
              <h3 className="text-left m-0 custom-padding fw-bold">Telecom</h3>
              <p className="custom-padding m-0">
              Telecommunications is one of the most vulnerable industries to cyber-attacks. Large customer bases provide large areas of attack, and a successful cyber-attack could have far-reaching consequences.
              </p>
              <Button type="button" className="btn btn-primary">
              Read More
              </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
           
            <div className="col-12 col-lg-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 py-2 order-lg-1">
            <ContainerDefault>
            <h3 className="text-left m-0 custom-padding fw-bold">Defense</h3>
              <p className="custom-padding m-0">
              High-volume secure data-streaming has become a necessity for many critical defense applications. A comprehensive intrusion detection system that protects against ransomware, malware, and other advanced cyber-attacks.
              </p>
              <Button type="button" className="btn btn-primary">
                Read More
              </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-3 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 py-2">
            <ContainerDefault>
            <h3 className="text-left m-0 custom-padding fw-bold">Oil & Gas</h3>
              <p className="custom-padding m-0">
              The Oil & Gas industry relies on an array of pumps, sensors, meters, and other machinery. Unexpected maintenance or malicious interference can halt production and cause immense losses.
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
                <img className="img w-100" src={Frame78}></img>
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 order-lg-1 py-2">
            <ContainerDefault>
            <h3 className="text-left m-0 custom-padding fw-bold">Utilities</h3>
              <p className="custom-padding m-0">
              Critical infrastructures are more and more dependent upon an increasingly scattered network of sensors and meters. Our remote access identity management and device auditing.
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

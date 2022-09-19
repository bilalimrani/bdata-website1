import React from "react";
import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/pressLightWeightSection.style";
import pressConstant from "../../../utils/press.constants";

export default function LightWeightSection() {
  const reverseData = Array.from(pressConstant.sectionsData).reverse();

  return (
    <LightWeightSectionWrapper>
      <InfoArea>
        <div className="container">
          {reverseData.map((item: any, index) => {
            const reminder = index % 2;
            return (
              <div className="row">
                <div
                  className={`col-12 col-lg-4 col-xl-3 py-2 ${
                    reminder !== 0 && "order-lg-2"
                  }`}
                >
                  <SectionImage>
                    <img className="img w-100" src={item.img}></img>
                  </SectionImage>
                </div>
                <div className="col-12 col-lg-8 col-xl-9 py-2">
                  <ContainerDefault>
                    <h3 className="text-left m-0 custom-padding fw-bold">
                      {item.title}
                    </h3>
                    <p className="custom-padding m-0">{item.subTitle}</p>
                    <Button
                      href={item.link}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Read More
                    </Button>
                  </ContainerDefault>
                </div>
              </div>
            );
          })}
        </div>
      </InfoArea>
    </LightWeightSectionWrapper>
  );
}

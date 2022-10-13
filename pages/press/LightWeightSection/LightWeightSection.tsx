import React from "react";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
} from "../../../styles/styledComponents/pressLightWeightSection.style";
import pressConstant from "../../../utils/press.constants";
import BookImg from "../../../components/BookImg/BookImg";

export default function LightWeightSection() {
  const reverseData = Array.from(pressConstant.sectionsData).reverse();

  return (
    <LightWeightSectionWrapper>
      <InfoArea>
        <div className="container">
          {reverseData.map((item: any, index) => {
            const reminder = index % 2;
            return (
              <div className="row my-lg-5">
                <div
                  className={`col-12 col-lg-4 col-xl-3 ${
                    reminder !== 0 && "order-lg-2"
                  } py-2`}
                >
                  <BookImg title={item.title} img={item.img} />
                </div>
                <div
                  className={`col-12 col-lg-8 col-xl-9 py-2 order-lg-1 ${
                    reminder !== 0 && "order-lg-1"
                  }`}
                >
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

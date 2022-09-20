/*eslint-disable*/
import React from "react";
import homeConstants from "../../../utils/home.constants";
import { AwardsContainer, CarouselWrapper } from "./Awards.style";
import Image from "next/image";

export default function Awards() {
  return (
    <AwardsContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center m-0 fw-bold head-size">
              {homeConstants?.awards.title}
            </h3>
            <h5 className="text-center custom-bottom-padding m-0">
              {homeConstants?.awards.subTitle}
            </h5>
            {/* <Slider {...settings}> */}
            <div className="row">
              {homeConstants?.awards?.data?.map((item, index) => (
                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                  <CarouselWrapper>
                    {item.image && (
                      <Image
                        placeholder="blur"
                        src={item?.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className="custom-next-js"
                      />
                    )}
                    <div className="custom-section-height p-3">
                      <p
                        className="text-center para-text-details m-0"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></p>
                      <div className="bottom-line"></div>
                    </div>
                  </CarouselWrapper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AwardsContainer>
  );
}

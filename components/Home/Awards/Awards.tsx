/*eslint-disable*/
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import homeConstants from "../../../utils/home.constants";
import { AwardsContainer, CarouselWrapper } from "./Awards.style";

export default function Awards() {
  return (
    <AwardsContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center m-0 fw-bold">
              {homeConstants?.awards.title}
            </h2>
            <Carousel>
              {homeConstants?.awards?.data?.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="row">
                    {item?.map((item1, index1) => (
                      <div className="col-sm-3" key={index1}>
                        <CarouselWrapper>
                          <Image src={item1.image} width={150} height={48} />
                          <div className="p-3">
                            <p className="text-center">{item1?.text}</p>
                          </div>
                        </CarouselWrapper>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </AwardsContainer>
  );
}

/*eslint-disable*/
import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
// import Slider from "react-slick";
import homeConstants from "../../../utils/home.constants";
import { AwardsContainer, CarouselWrapper } from "./Awards.style";

// const Jerdins = require("public/img/desjardins.svg");
// const Rogers = require("public/img/rogers.svg");
// const HelloTomarrow = require("public/img/newWorledReport.png");
// const Artc = require("public/img/agency.svg");

export default function Awards() {
  // var settings = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1378,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     // {
  //     //   breakpoint: 800,
  //     //   settings: 'unslick',
  //     // },
  //   ],
  // };
  return (
    <AwardsContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center m-0 fw-bold  head-size">
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
                      // <Image src={item?.image} width={150} height={48} />
                      <img src={item?.image} alt="" />
                    )}
                    <div className="custom-section-height p-3">
                      <p className="text-center para-text-details m-0">
                        {item.text}
                      </p>
                      <div className="bottom-line"></div>
                    </div>
                  </CarouselWrapper>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col-md-3">
                <CarouselWrapper>
                  <Image src={Rogers} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      1st place Rogers 5g Cyber Security Competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              <div className="col-md-3">
                <CarouselWrapper>
                  <Image src={HelloTomarrow} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      best iot cyber security product award
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              <div className="col-md-3">
                <CarouselWrapper>
                  <Image src={Artc} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      Won singapore's secure remote operation competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
            </div> */}
            {/* ))} */}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </AwardsContainer>
  );
}

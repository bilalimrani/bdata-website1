/*eslint-disable*/
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Slider from "react-slick";
import homeConstants from "../../../utils/home.constants";
import { AwardsContainer, CarouselWrapper } from "./Awards.style";

const Jerdins = require("public/img/desjardins.svg");
const Rogers = require("public/img/rogers.svg");
const HelloTomarrow = require("public/img/hello.svg");
const Artc = require("public/img/agency.svg");

export default function Awards() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1378,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 800,
      //   settings: 'unslick',
      // },
    ],
  };
  return (
    <AwardsContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center m-0 custom-padding-subsection fw-bold">
              {homeConstants?.awards.title}
            </h3>
            <Slider {...settings}>
              {/* {homeConstants?.awards?.data?.map((item, index) => ( */}
              <div>
                <CarouselWrapper>
                  <Image src={Jerdins} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      Won Desjardins Cyber Security Competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              <div>
                <CarouselWrapper>
                  <Image src={Rogers} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      Won Desjardins Cyber Security Competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              <div>
                <CarouselWrapper>
                  <Image src={HelloTomarrow} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      Won Desjardins Cyber Security Competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              <div>
                <CarouselWrapper>
                  <Image src={Artc} width={150} height={48} />
                  <div className="p-3">
                    <p className="text-center">
                      Won Desjardins Cyber Security Competition
                    </p>
                  </div>
                </CarouselWrapper>
              </div>
              {/* ))} */}
            </Slider>
          </div>
        </div>
      </div>
    </AwardsContainer>
  );
}

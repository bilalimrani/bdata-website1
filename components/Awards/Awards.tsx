/*eslint-disable*/
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
const Jerdins = require("public/img/desjerdins.svg");
const Rogers = require("public/img/rogers.svg");
const HelloTomarrow = require("public/img/hello-tomarrow.svg");
const Artc = require("public/img/agency-science-tech.svg");
import {AwardsContainer, CarouselWrapper} from './Awards.style';

export default function Awards() {
  return (
   <AwardsContainer>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="text-center m-0 fw-bold">Awards</h2>
                <Carousel>
                <Carousel.Item>
                    <div className="row">
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Jerdins} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Desjardins Cyber Security Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Rogers} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Roger 5g Cyber security competition in Canada</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={HelloTomarrow} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Finalist – Deep Tech Startup Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Artc} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won ARTC startup Challenge for Secure Remote Operation</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Jerdins} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Desjardins Cyber Security Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Rogers} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Roger 5g Cyber security competition in Canada</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={HelloTomarrow} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Finalist – Deep Tech Startup Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Artc} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won ARTC startup Challenge for Secure Remote Operation</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Jerdins} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Desjardins Cyber Security Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Rogers} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won Roger 5g Cyber security competition in Canada</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={HelloTomarrow} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Finalist – Deep Tech Startup Competition</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className="col-sm-3">
                        <CarouselWrapper>
                            <Image src={Artc} width={150} height={48} />
                            <div className="p-3">
                                <p className="text-center">Won ARTC startup Challenge for Secure Remote Operation</p>
                            </div>
                        </CarouselWrapper>
                    </div>
                  </div>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
   </AwardsContainer>
  );
}

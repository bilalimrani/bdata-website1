import React from "react";
import {PaperWraper , CardWrapper, Button,SectionPadding }  from "./WhitePaper.style";
import Image from "next/image";

const PaperImg = require("public/img/paperimg.svg");

export default function WhitePaper() {
  return (
    <PaperWraper>
        <SectionPadding>
         <h3 className="text-center m-0  fw-bold">Whitepapers</h3>
         </SectionPadding>
         <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
               <Button type="button" className="btn btn-primary">
              Request Download
              </Button>
                </CardWrapper>
            </div>
         </div>
    </PaperWraper>
  );
}

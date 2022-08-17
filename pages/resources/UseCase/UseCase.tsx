import React from "react";
import {PaperWraper , CardWrapper, Button,SectionPadding }  from "./UseCase.style";
import Image from "next/image";

const PaperImg = require("public/img/paperimg.svg");

export default function UseCase() {
  return (
    <PaperWraper>
         <SectionPadding>
         <h2 className="text-center m-0 fw-bold">Use Case</h2>
         </SectionPadding>
         <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 1</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 2</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 3</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 3</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 4</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 5</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 6</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 custom-padding">
                <CardWrapper>
                <Image
                src={PaperImg}
                width="100%"
                height="300px"
                className="img-responsive"
              />
              <h4 className="m-0 my-4 fw-bold">Use Case 7</h4>
              <Button>Request Download</Button>
                </CardWrapper>
            </div>
         </div>
         
    </PaperWraper>
  );
}

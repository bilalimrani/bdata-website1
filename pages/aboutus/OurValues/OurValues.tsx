import React from "react";
import {
  ValueWrapper,
  ValuesWrapperCard,
  ShapeWrapper,
} from "../../../styles/styledComponents/OurValues.style";
import Image from "next/image";

const Passion = require("public/img/Passion.svg");
const Influential = require("public/img/influential.svg");
const trustdiversity = require("public/img/trustdiversity.svg");

export default function OurValues() {
  return (
    <ValueWrapper>
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h3 className="text-center fw-bold m-0 pb-4">Our Values</h3>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ValuesWrapperCard>
              <ShapeWrapper>
                <Image
                  src={Passion}
                  width="35px"
                  height="35px"
                  alt="bdata"
                  className="img-responsive"
                />
              </ShapeWrapper>
              <h4 className="fw-bold py-2">Passion</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </ValuesWrapperCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ValuesWrapperCard>
              <ShapeWrapper>
                <Image
                  src={Influential}
                  width="35px"
                  height="35px"
                  alt="bdata"
                  className="img-responsive"
                />
              </ShapeWrapper>
              <h4 className="fw-bold py-2">Influential Innovation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </ValuesWrapperCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ValuesWrapperCard>
              <ShapeWrapper>
                <Image
                  src={trustdiversity}
                  width="35px"
                  height="35px"
                  alt="bdata"
                  className="img-responsive"
                />
              </ShapeWrapper>
              <h4 className="fw-bold py-2">Trust and Diversity</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </ValuesWrapperCard>
          </div>
        </div>
      </div>
    </ValueWrapper>
  );
}

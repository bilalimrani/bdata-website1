import React, { useState } from "react";
import Image from "next/image";
import BookWrapper from '../BookWrapper.style.js';

const logoImg = require("public/img/favicon.png");
const azure = require("public/img/azure.svg");
const amazon = require("public/img/amazon.svg");


export default function TechPartner() {

  return (
  <div className="row">
     
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <BookWrapper>
          <Image
                  src={logoImg}
                  className="w-100"
                  height="16px"
                  alt="bdata"
                  width="14px"
                />
                <div className="custom-card-body">
                  <div className="card-body-inner-img">
                  <Image
                  src={azure}
                  className="w-100"
                  height="56px"
                  alt="bdata"
                  width="195px"
                />
                  </div>
                  <div className="card-title">
                    <p>Technology Partner</p>
                  </div>
                </div>
        </BookWrapper>
      </div>
   
   
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <BookWrapper>
          <Image
                  src={logoImg}
                  className="w-100"
                  height="16px"
                  alt="bdata"
                  width="14px"
                />
                <div className="custom-card-body">
                  <div className="card-body-inner-img">
                  <Image
                  src={amazon}
                  className="w-100"
                  height="64px"
                  alt="bdata"
                  width="169px"
                />
                  </div>
                  <div className="card-title">
                    <p>Technology Partner</p>
                  </div>
                </div>
        </BookWrapper>
      </div>

  </div>
  );
}

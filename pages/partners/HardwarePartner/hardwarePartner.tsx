import React, { useState } from "react";
import Image from "next/image";
import BookWrapper from '../BookWrapper.style.js';

const logoImg = require("public/img/favicon.png");
const hardware = require("public/img/hardware.svg");


export default function hardwarePartner() {

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
                  src={hardware}
                  className="w-100"
                  height="72px"
                  alt="bdata"
                  width="207px"
                />
                  </div>
                  <div className="card-title">
                    <p>Hardware Partner</p>
                  </div>
                </div>
        </BookWrapper>
      </div>


  </div>
  );
}

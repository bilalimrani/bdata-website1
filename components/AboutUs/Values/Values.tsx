import React from "react";
import Image from 'next/image'
import { ValueWrapper } from "./Values.style";
const icon1 = require("public/img/icon1.svg");
const icon2 = require("public/img/icon2.svg");
const icon3 = require("public/img/icon3.svg");


export default function Guide() {
  return <ValueWrapper className="container">
    <h1 className="text-center main-heading">Our Values</h1>
    <br />
    <div className="row">
      <div className="col-sm">
        <div className="icon">
          <Image
            src={icon2}
            alt="Picture of the author"
            width="25px"
            height="30px"
            className="imageIcons"
          />
        </div>
        <div className="heading">Passion</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div className="col-sm">
      <div className="icon">
          <Image
            src={icon1}
            alt="Picture of the author"
            width="25px"
            height="30px"
            className="imageIcons"
          />
        </div>
        <div className="heading">Influential Innovation</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div className="col-sm">
      <div className="icon">
          <Image
            src={icon3}
            alt="Picture of the author"
            width="25px"
            height="30px"
            className="imageIcons"
          />
        </div>
        <div className="heading">Trust and Diversity</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
    </div>
  </ValueWrapper>;
}

import React from "react";
import { ProductWrapper } from "./BiotProducts.style";
import productConstants from "../../../utils/products.constants";
const icon1 = require("public/img/image-26.png");
const icon2 = require("public/img/image-62.png");
const icon3 = require("public/img/image-63.png");
const icon4 = require("public/img/image-64.png");

export default function BiotProduct() {
  return (
    <ProductWrapper>
      <div className="container">
        <div className="row custom-padding-top">
          <div className="col-lg-6 custom-padding">
            <div className="heading">
              {productConstants.products.section1.title}
            </div>
            <p>{productConstants.products.section1.subTitle}</p>
            <ul>
              <li>{productConstants.products.section1.point1}</li>
              <li>{productConstants.products.section1.point2}</li>
              <li>{productConstants.products.section1.point3}</li>
            </ul>
          </div>
          <div className="col-lg-6 custom-padding text-end">
            <img src={icon1} className="card-image-center" alt="bdata" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 custom-padding order-lg-2">
            <div className="heading">
              {productConstants.products.section2.title}
            </div>
            <p>{productConstants.products.section2.subTitle}</p>
            <ul>
              <li>{productConstants.products.section2.point1}</li>
              <li>{productConstants.products.section2.point2}</li>
              <li>{productConstants.products.section2.point3}</li>
            </ul>
          </div>
          <div className="col-lg-6 custom-padding order-lg-1">
            <img
              src={icon2}
              className="card-image-center"
              alt="Hollywood Sign on The Hill"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 custom-padding">
            <div className="heading">
              {productConstants.products.section3.title}
            </div>
            <p>{productConstants.products.section3.subTitle}</p>
            <ul>
              <li>{productConstants.products.section3.point1}</li>
              <li>{productConstants.products.section3.point2}</li>
              <li>{productConstants.products.section3.point3}</li>
            </ul>
          </div>
          <div className="col-lg-6 custom-padding text-end">
            <img
              src={icon3}
              className="card-image-center"
              alt="Hollywood Sign on The Hill"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 custom-padding order-lg-2">
            <div className="heading">
              {productConstants.products.section4.title}
            </div>
            <p>{productConstants.products.section4.subTitle}</p>
            <ul>
              <li>{productConstants.products.section4.point1}</li>
              <li>{productConstants.products.section4.point2}</li>
              <li>{productConstants.products.section4.point3}</li>
            </ul>
          </div>
          <div className="col-lg-6 custom-padding order-lg-1">
            <img
              src={icon4}
              className="card-image-center"
              alt="Hollywood Sign on The Hill"
            />
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
}

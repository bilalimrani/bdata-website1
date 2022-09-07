import React from "react";
import {
  ProuctListing,
  Button,
  InfoArea,
  ContainerDefault,
} from "../../../styles/styledComponents/ProductListing.style";
// import links from "../../../utils/navbar.constants";
const product2 = require("public/img/product2.svg");
const Product1 = require("public/img/product1.svg");
import productConstants from "../../../utils/products.constants";

export default function LightWeightSection() {
  return (
    <ProuctListing>
      <InfoArea>
        <div className="container">
          <div className="row my-lg-5">
            <div className="col-12 col-lg-6 col-xl-5 order-lg-2 py-2">
              {/* <SectionImage> */}
              <img className="img w-100 max-image-content" src={Product1} />
              {/* </SectionImage> */}
            </div>
            <div className="col-12  col-lg-6 col-xl-7 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {productConstants.products.section1.title}
                </h3>
                <p className="custom-padding m-0">
                  {productConstants.products.section1.subTitle}
                </p>

                <Button
                  href="/products/ProductsListing/ProductDetailsHub"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-6 col-xl-5 py-2">
              {/* <SectionImage> */}
              <img className="img w-100 max-image-content" src={product2}></img>
              {/* </SectionImage> */}
            </div>
            <div className="col-12  col-lg-6 col-xl-7 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {productConstants.products.section2.title}
                </h3>
                <p className="custom-padding m-0">
                  {productConstants.products.section2.subTitle}
                </p>
                <Button
                  href="/products/ProductsListing/ProductDetailsFingerPrint"
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
        </div>
      </InfoArea>
    </ProuctListing>
  );
}

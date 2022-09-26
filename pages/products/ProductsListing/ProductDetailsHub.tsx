import React from "react";
import Head from "next/head";
import {
  ProuctListing,
  InfoArea,
  FullContainer,
  FeatureListing,
} from "../../../styles/styledComponents/ProductListing.style";
import productConstants from "../../../utils/products.constants";
const product2 = require("public/img/product1.1.svg");
const Product1 = require("public/img/product1.svg");

export default function ProductDetailsHub() {
  return (
    <div>
      <Head>
        <title>Product Details Hub</title>
      </Head>
      <ProuctListing>
        <InfoArea>
          <div className="container">
            <div className="row my-lg-5">
              <div className="col-12 col-xl-3 py-2">
                {/* <SectionImage> */}
                <img
                  className="img w-100 max-image-content"
                  alt="bdata"
                  src={Product1}
                />
                {/* </SectionImage> */}
              </div>
              <div className="col-12 col-xl-9 py-2">
                <FullContainer>
                  <h4 className="fw-bold">BDATA Product</h4>
                  <h3 className="text-left m-0 custom-padding fw-bold">
                    {productConstants.products.section1.title}
                  </h3>
                  <p className="custom-padding m-0">
                    {productConstants.products.section1.subTitle}
                  </p>
                  <div
                    style={{
                      background: `url(${product2})`,
                      backgroundRepeat: "no-repeat",
                      height: "400px",
                      width: "900px",
                      backgroundSize: "contain",
                    }}
                    className="product-img"
                  >
                    {/* <img src={product2} height="500" width="500" /> */}
                  </div>
                  {/* <CustomUl>
                    <li>
                      <span>1</span>
                      {productConstants.products.section1.point1}
                    </li>
                    <li>
                      <span>2</span>
                      {productConstants.products.section1.point2}
                    </li>
                    <li>
                      <span>3</span>
                      {productConstants.products.section1.point3}
                    </li>
                    <li>
                      <span>4</span>
                      {productConstants.products.section1.point4}
                    </li>
                    <li>
                      <span>5</span>
                      {productConstants.products.section1.point5}
                    </li>
                  </CustomUl> */}
                  <FeatureListing>
                    <p>{productConstants.products.section1.feature1}</p>
                    <li>{productConstants.products.section1.feature2}</li>
                    <li>{productConstants.products.section1.feature3}</li>
                    <li>{productConstants.products.section1.feature4}</li>
                    <li>{productConstants.products.section1.feature5}</li>
                    <li>{productConstants.products.section1.feature6}</li>
                    <li>{productConstants.products.section1.feature7}</li>
                    <li>{productConstants.products.section1.feature8}</li>
                    <li>{productConstants.products.section1.feature9}</li>
                    <li>{productConstants.products.section1.feature10}</li>
                  </FeatureListing>
                </FullContainer>
              </div>
            </div>
          </div>
        </InfoArea>
      </ProuctListing>
    </div>
  );
}

import React from "react";
import Head from "next/head";
// import Image from "next/image";
import {
  ProuctListing,
  Button,
  InfoArea,
  FullContainer,
  CustomUl,
  FeatureListing,
} from "../../../styles/styledComponents/ProductListing.style";
const product2 = require("public/img/product2.svg");
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
const valunerability = require("public/img/valunerability.png");
import productConstants from "../../../utils/products.constants";


export default function ProductDetailsFingerPrint() {
  return (
    <div>
      <Head>
        <title>Product Details FingerPrint</title>
      </Head>
      <Header />
      <ProuctListing>
        <InfoArea>
          <div className="container">
            <div className="row my-lg-5">
              <div className="col-12 col-xl-3 py-2">
                {/* <SectionImage> */}
                <img className="img w-100 max-image-content" src={product2} />
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
                  <FeatureListing>
                    <h4 className="fw-bold">{productConstants.products.section2.feature1}</h4>
                    <p >{productConstants.products.section2.feature2}</p>
                    <li>{productConstants.products.section2.feature3}</li>
                    <li>{productConstants.products.section2.feature4}</li>
                    <li>{productConstants.products.section2.feature5}</li>
                    <li>{productConstants.products.section2.feature6}</li>
                    <li>{productConstants.products.section2.feature7}</li>
                  </FeatureListing>
                  <h4 className="fw-bold">{productConstants.products.section2.application1}</h4>
                  <p>{productConstants.products.section2.application2}</p>
                  <div className="row my-lg-2">
                    <div className="col-12 col-md-6 py-2 text-center">
                      <img src={valunerability} alt="" className="max-width-100" />
                    </div>
                    <div className="col-12 col-md-6 py-2">
                      <h4 className="fw-bold">{productConstants.products.section2.valunerability}</h4>
                      <CustomUl>
                        <li><span>1</span>{productConstants.products.section2.valunerabilities1}</li>
                        <li><span>2</span>{productConstants.products.section2.valunerabilities2}</li>
                        <li><span>3</span>{productConstants.products.section2.valunerabilities3}</li>
                        <li><span>4</span>{productConstants.products.section2.valunerabilities4}</li>
                        <li><span>5</span>{productConstants.products.section2.valunerabilities5}</li>
                      </CustomUl>
                    </div>
                  </div>

                </FullContainer>
              </div>
            </div>

          </div>
        </InfoArea>
      </ProuctListing>
      <Footer />

    </div>
  )
}
import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import ProductsListing from "./ProductsListing/ProductsListing";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      {/* <Banner /> */}
      <MainWrapper>
        <ProductsListing />
        {/* <ProductDetailsHub /> */}
        {/* <ProductDetailsFingerPrint /> */}
        {/* <Banner /> */}
        {/* <div className="container">
          <IdentityAccess>
            <h3 className="text-center m-0 fw-bold">
              {productConstants?.identityAccess}
            </h3>
            <img src={identityAccess} />
          </IdentityAccess>
        </div> */}
        {/* <IdentityBottom>
          <div className="container">
            <p>{productConstants?.identityBottomTxt}</p>
          </div>
        </IdentityBottom> */}
        {/* <BiotProduct /> */}
        {/* <ContactForm /> */}
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Products;

import React from "react";
import Head from "next/head";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import productConstants from "../../utils/products.constants";
import {
  IdentityAccess,
  IdentityBottom,
} from "../../styles/styledComponents/Products.style";
import BiotProduct from "../../components/Products/BiotProducts/BiotProducts";
import ContactForm from "../../components/Products/ContactForm/ContactUs";
import MainWrapper from "../style.js";
const identityAccess = require("public/img/identityAccess.png");

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner data={productConstants?.banner} />
        <div className="container">
          <IdentityAccess>
            <h3 className="text-center m-0 fw-bold">
              {productConstants?.identityAccess}
            </h3>
            <img src={identityAccess} />
          </IdentityAccess>
        </div>
        <IdentityBottom>
          <div className="container">
            <p>{productConstants?.identityBottomTxt}</p>
          </div>
        </IdentityBottom>
        <BiotProduct />
        {/* <ContactForm /> */}
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Products;

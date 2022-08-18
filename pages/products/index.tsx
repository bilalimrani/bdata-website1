import React from "react";
import Banner from "../../components/Products/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import productConstants from "../../utils/products.constants.js";
import { IdentityAccess, IdentityBottom } from "./Products.style";
import BiotProduct from "../../components/Products/BiotProducts/BiotProducts";
import ContactForm from "../../components/Products/ContactForm/ContactUs";
import MainWrapper from "../style.js";

const identityAccess = require("public/img/identityAccess.png");

const Products = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <IdentityAccess>
          <h2 className="text-center m-0 fw-bold">
            {productConstants?.identityAccess}
          </h2>
          <img src={identityAccess} />
        </IdentityAccess>
        <IdentityBottom>
          <p>{productConstants?.identityBottomTxt}</p>
        </IdentityBottom>
        <BiotProduct />
        <ContactForm />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Products;

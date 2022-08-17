import React from "react";
import Image from "next/image";
import Banner from "../../components/Products/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import productConstants from "../../utils/products.constants.js";
import { IdentityAccess, IdentityBottom } from "./Products.style";
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
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Products;

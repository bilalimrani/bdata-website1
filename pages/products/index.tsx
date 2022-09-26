import React from "react";
import Head from "next/head";
import MainWrapper from "../style.js";
import ProductsListing from "./ProductsListing/ProductsListing";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <MainWrapper>
        <ProductsListing />
      </MainWrapper>
    </div>
  );
};

export default Products;

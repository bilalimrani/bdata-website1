import React from "react";
import Head from "next/head";
import Banner from "./Banner/Banner";
import AllResources from "./AllResources/AllResources";
import MainWrapper from "../style.js";

const Resources = () => {
  return (
    <div>
      <Head>
        <title>Resources</title>
      </Head>
      <MainWrapper>
        <Banner />
        <AllResources />
      </MainWrapper>
    </div>
  );
};

export default Resources;

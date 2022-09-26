import React from "react";
import Head from "next/head";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";

const Industries = () => {
  return (
    <div>
      <Head>
        <title>Industries</title>
      </Head>
      <MainWrapper>
        <Banner />
        <LightWeightSection />
      </MainWrapper>
    </div>
  );
};

export default Industries;

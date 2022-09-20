import React from "react";
import Head from "next/head";
import Banner from "../../components/Home/Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";
import MainWrapper from "../style.js";

const CaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Case Stuudy</title>
      </Head>
      <MainWrapper>
        <Banner />
        <LightWeightSection />
      </MainWrapper>
    </div>
  );
};

export default CaseStudy;

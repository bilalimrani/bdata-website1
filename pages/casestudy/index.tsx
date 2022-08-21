import React from "react";
import Head from "next/head";
import caseStudyConstants from "../../utils/caseStudy.constants";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LightWeightSection from "./LightWeightSection/LightWeightSection";
import MainWrapper from "../style.js";

const CaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Case Stuudy</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner data={caseStudyConstants?.banner} />
        <LightWeightSection />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default CaseStudy;

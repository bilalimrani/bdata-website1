import React from "react";
import caseStudyConstants from "../../utils/caseStudy.constants";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LightWeightSection from "./LightWeightSection/LightWeightSection";
import MainWrapper from "../style.js";

const CaseStudy = () => {
  return (
    <div>
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

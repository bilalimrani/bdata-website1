import React from "react";
import caseStudyConstants from "../../utils/caseStudy.constants";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";

const CaseStudy = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner data={caseStudyConstants?.banner} />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default CaseStudy;

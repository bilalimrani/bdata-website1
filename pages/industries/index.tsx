import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";

const Industries = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <LightWeightSection />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Industries;

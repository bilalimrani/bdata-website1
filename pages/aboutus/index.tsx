import React from "react";
import Banner from "../../components/AboutUs/Banner/Banner";
import Vision from "../../components/AboutUs/VisionAndMission/Vision"
import Value from "../../components/AboutUs/Values/Values"
import Team from "../../components/AboutUs/Team/Team"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <Vision />
        <Value />
        <Team />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default AboutUs;

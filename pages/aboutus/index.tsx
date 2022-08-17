import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import OurMission from "./OurMission/OurMission";
import OurValues from "./OurValues/OurValues";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <div className="container">
        <OurMission />
        <OurValues />
        </div>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default AboutUs;

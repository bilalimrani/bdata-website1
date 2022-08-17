import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import OurMission from "./OurMission/OurMission";
import OurValues from "./OurValues/OurValues";
import Team from "./Team/Team";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <div className="container">
          <OurMission />
          <OurValues />
          <Team />
        </div>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default AboutUs;

import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Home/Banner/Banner";
import AwardsContainer from "components/Home/Awards/Awards";
import PartnersContainer from "components/Home/Partners/Partners";
import CustomersStories from "components/Home/CustomersStories/CustomersStories";
import Guide from "components/Home/Guide/Guide";
import LightWeightSection from "components/Home/LightWeightSection/LightWeightSection";
import MainWrapper from "./style.js";

const Main = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
        <AwardsContainer />
        <Guide />
        <LightWeightSection />
        <PartnersContainer />
        <CustomersStories />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Main;

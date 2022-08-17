import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Home/Banner/Banner";
import AwardsContainer from "components/Home/Awards/Awards";
import PartnersContainer from "components/Home/Partners/Partners";
import LightWeightSection from "components/Home/LightWeightSection/LightWeightSection";
import CustomersStories from "components/Home/CustomersStories/CustomersStories";
import homeConstants from "../utils/home.constants";
import MainWrapper from "./style.js";

const Main = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner data={homeConstants?.banner} sideImage={true} />
        <AwardsContainer />
        <LightWeightSection />
        <PartnersContainer />
        <CustomersStories />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Main;

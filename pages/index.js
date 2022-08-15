import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Banner/Banner";
import AwardsContainer from "components/Home/Awards/Awards";
import PartnersContainer from "components/Home/Partners/Partners";
import CustomersStories from "components/Home/CustomersStories/CustomersStories";
import Guide from "components/Home/Guide/Guide";
import homeConstants from "../utils/home.constants";
import LightWeightSection from "components/Home/LightWeightSection/LightWeightSection";
import MainWrapper from "./style.js";

const Main = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner
          title={homeConstants?.banner?.title}
          bgImage={homeConstants?.banner?.bgImage}
          sideImage={homeConstants?.banner?.sideImage}
        />
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

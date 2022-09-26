import React from "react";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("components/Home/Banner/Banner"));
const AwardsContainer = dynamic(() => import("components/Home/Awards/Awards"));
const PartnersContainer = dynamic(() =>
  import("components/Home/Partners/Partners")
);
const LightWeightSection = dynamic(() =>
  import("components/Home/LightWeightSection/LightWeightSection")
);
const CustomersStories = dynamic(() =>
  import("components/Home/CustomersStories/CustomersStories")
);
import homeConstants from "../utils/home.constants";
import MainWrapper from "./style.js";
// import Cookies from "../components/Cookie/Cookie";

const Main = () => {
  return (
    <div>
      <MainWrapper>
        <Banner data={homeConstants?.banner} />
        <AwardsContainer />
        <LightWeightSection />
        <PartnersContainer />
        <CustomersStories />
        {/* <Cookies /> */}
      </MainWrapper>
    </div>
  );
};

export default Main;

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
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
      <Head>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/22504652.js"
        ></script>
      </Head>
      <div id="hubspot-form-wrapper" />
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

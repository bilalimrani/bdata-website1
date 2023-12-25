import React from "react";
import Head from "next/head";
import { MainWrapper } from "../style.js";
import Banner from "./Banner/Banner";
import OurMission from "./OurMission/OurMission";
// import OurValues from "./OurValues/OurValues";
import Team from "./Team/Team";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <MainWrapper>
        <Banner />
        <OurMission />
        {/* <OurValues /> */}
        <Team />
      </MainWrapper>
    </div>
  );
};

export default AboutUs;

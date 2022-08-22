import React from "react";
import Head from "next/head";
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
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner />
        <OurMission />
        <OurValues />
        <Team />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default AboutUs;

import React from "react";
import Head from "next/head";
import { MainWrapper } from "../style.js";
import Banner from "./Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Press</title>
      </Head>
      <MainWrapper>
        <Banner />
        <LightWeightSection />
      </MainWrapper>
    </div>
  );
};

export default ContactUs;

import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";
import pressConstants from "../../utils/press.constants";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Press</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner />
        <LightWeightSection />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default ContactUs;

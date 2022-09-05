import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";
import Banner from "./Banner/Banner";
import LightWeightSection from "./LightWeightSection/LightWeightSection";
import industriesConstants from "../../utils/industries.constants";

const Industries = () => {
  return (
    <div>
      <Head>
        <title>Industries</title>
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

export default Industries;

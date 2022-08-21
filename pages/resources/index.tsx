import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "./Banner/Banner";
import AllResources from "./AllResources/AllResources";
import MainWrapper from "../style.js";
// import resourcesConsonents from "../../utils/resources.constants";

const Resources = () => {
  return (
    <div>
      <Head>
        <title>Resources</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner />
        <AllResources />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Resources;

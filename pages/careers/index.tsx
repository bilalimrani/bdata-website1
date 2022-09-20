import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Career/Banner/Banner";
import MainWrapper from "../style.js";
import JobListing from "../../components/Career/JobListing";

const careers = () => {
  return (
    <div>
      <Head>
        <title>Careers</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner />
        <div className="container">
          <JobListing />
        </div>
      </MainWrapper>
      <Footer />
    </div>
  );
};
export default careers;

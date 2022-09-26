import React from "react";
import Head from "next/head";
import Banner from "../../components/Career/Banner/Banner";
import MainWrapper from "../style.js";
import JobListing from "../../components/Career/JobListing";

const careers = () => {
  return (
    <div>
      <Head>
        <title>Careers</title>
      </Head>
      <MainWrapper>
        <Banner />
        <div className="container">
          <JobListing />
        </div>
      </MainWrapper>
    </div>
  );
};
export default careers;

import React from "react";
import Head from "next/head";
import Banner from "./Banner/Banner";
import AllResources from "./AllResources/AllResources";

const Partners = () => {
  return (
    <div>
      <Head>
        <title>Partners</title>
      </Head>
      <Banner />
      <AllResources />
    </div>
  );
};

export default Partners;

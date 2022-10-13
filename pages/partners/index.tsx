import React from "react";
import Head from "next/head";
import Banner from "../../components/Partners/Banner/Banner";
import AllResources from "../../components/Partners/AllResources/AllResources";

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

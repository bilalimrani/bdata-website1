import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Header />
      Privacy Policy
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

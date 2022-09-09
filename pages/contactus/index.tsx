import React from "react";
import Head from "next/head";
import Banner from "../../components/ContactUs/Banner/Banner";
import Contact from "../../components/ContactUs/ContactUs/ContactUs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import contactUsConstants from "../../utils/contactUs.constants";
import MainWrapper from "../style.js";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header />
      <MainWrapper>
        <Banner />
        <Contact />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default ContactUs;

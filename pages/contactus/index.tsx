import React from "react";
import Head from "next/head";
import Banner from "../../components/ContactUs/Banner/Banner";
import Contact from "../../components/ContactUs/ContactUs/ContactUs";
import { MainWrapper } from "../style.js";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <MainWrapper>
        <Banner />
        <Contact />
      </MainWrapper>
    </div>
  );
};

export default ContactUs;

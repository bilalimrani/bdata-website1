import React from "react";
import Banner from "../../components/ContactUs/Banner/Banner";
import Contact from "../../components/ContactUs/ContactUs/ContactUs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../style.js";

const ContactUs = () => {
  return (
    <div>
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

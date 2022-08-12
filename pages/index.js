import React from "react";
import Header from "components/Header/Header.tsx";
import Footer from "components/Footer/Footer.tsx";
import Banner from "components/Home/Banner/Banner.tsx";
import MainWrapper from "./style.js";

const Main = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Banner />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Main;

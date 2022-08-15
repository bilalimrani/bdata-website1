import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import MainWrapper from "../style.js";
import resourcesConsonents from "../../utils/resources.constants";

const Resources = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
      <Banner
          title={resourcesConsonents?.banner?.title}
          bgImage={resourcesConsonents?.banner?.bgImage}
          sideImage={resourcesConsonents?.banner?.sideImage}
        />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Resources;

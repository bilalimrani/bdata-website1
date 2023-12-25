import React from "react";
import dynamic from "next/dynamic";
import { BannerWrapper, A, MainWrapper } from "./style";
const Banner = dynamic(() => import("components/Home/Banner/Banner"));
const AwardsContainer = dynamic(() => import("components/Home/Awards/Awards"));
const PartnersContainer = dynamic(() =>
  import("components/Home/Partners/Partners")
);
const LightWeightSection = dynamic(() =>
  import("components/Home/LightWeightSection/LightWeightSection")
);
const CustomersStories = dynamic(() =>
  import("components/Home/CustomersStories/CustomersStories")
);
import homeConstants from "../utils/home.constants";
// import Cookies from "../components/Cookie/Cookie";

const Main = () => {
  return (
    <div>
      <MainWrapper>
        <BannerWrapper>
          <video autoPlay muted loop>
            <source
              type="video/webm"
              src="../homeBannerVideo.webm"
            />
          </video>
          <A
            href="https://org-registration.bdata.ca"
            target="_blank"
            className="btn btn-light"
          >
            Start free trial
          </A>
        </BannerWrapper>
        <AwardsContainer />
        <LightWeightSection />
        <PartnersContainer />
        <CustomersStories />
        {/* <Cookies /> */}
      </MainWrapper>
    </div>
  );
};

export default Main;

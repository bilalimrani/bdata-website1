import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/pressBanner.style";
const press3 = require("public/img/press3.gif");

export default function Banner() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 1000);
  }, []);

  return (
    <BannerWrapper>
      <Image priority src={press3} alt="bdata" layout="fill" />
      {showComponent && (
        <div className="banner-content-wrapper">
          <h2 className="fw-bold text-center">
            <TypeAnimation
              sequence={["Press"]}
              speed={30}
              wrapper="div"
              style={{ textTransform: "inherit" }}
              // repeat={Infinity}
            />
          </h2>
        </div>
      )}

      <Button
        target="_blank"
        href="https://demo.org.bdata.ca"
        className="btn btn-light"
      >
        Start Free Trial
      </Button>
    </BannerWrapper>
  );
}

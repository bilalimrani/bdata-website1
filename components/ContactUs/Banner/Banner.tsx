import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { BannerWrapper, Button } from "./Banner.style";
// const icon1 = require("public/img/main-asset.svg");
// const bdataPattern = require("public/img/logohalf.svg");

export default function Banner() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 1000);
  }, []);

  return (
    <BannerWrapper>
      <video autoPlay muted loop>
        <source
          type="video/mp4"
          src="https://bdata-files.s3.us-west-2.amazonaws.com/contactus.mp4"
        />
      </video>
      <div className="banner-content-wrapper">
        <h2 className="fw-bold text-center">
          Contact us to achieve cyber resilience
        </h2>
      </div>

      <Button
        target="_blank"
        href="https://demo.org.bdata.ca"
        className="btn btn-light"
      >
        Start free trial
      </Button>
    </BannerWrapper>
  );
}

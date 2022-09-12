import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  BannerWrapper,
  Button,
} from "../../../styles/styledComponents/pressBanner.style";

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
          src="https://bdata-files.s3.us-west-2.amazonaws.com/press.mp4"
        />
      </video>
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

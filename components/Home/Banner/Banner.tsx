import React from "react";

import { BannerWrapper, A } from "./Banner.style";

export default function Banner() {
  return (
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
  );
}

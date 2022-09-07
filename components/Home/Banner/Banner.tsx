import React from "react";
import { BannerWrapper, A } from "./Banner.style";

export default function Banner({ data = {} }) {
  const { bgImage, title, subTitle }: any = data;
  return (
    <BannerWrapper>
      <video autoPlay loop muted>
        <source
          type="video/mp4"
          src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(3).mp4"
        />
      </video>
      <A
        href="https://demo.org.bdata.ca"
        target="_blank"
        className="btn btn-light"
      >
        Start free trial
      </A>
      {/* <div className="container">
        <div className="banner-content-wrapper">
          <h2 className="fw-bold">{title}</h2>
          {subTitle && <p>{subTitle}</p>}
          <A
            href="https://demo.org.bdata.ca"
            target="_blank"
            className="btn btn-light"
          >
            Start free trial
          </A>
        </div>
      </div> */}
    </BannerWrapper>
  );
}

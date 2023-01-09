import React from "react";

import { BannerWrapper, A } from "./Banner.style";

export default function Banner() {
  return (
    <BannerWrapper>
      <video autoPlay muted loop>
        <source
          type="video/mp4"
          src="https://bdatawebsite.s3.us-west-1.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(17).mp4"
        />
      </video>
      {/* <Carousel fade indicators={false}>
        <Carousel.Item interval={4000}>
          <video autoPlay muted>
            <source
              type="video/mp4"
              src="https://bdatawebsitenew.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(9).mp4"
            />
          </video>
          {showComponent && (
            <FirstVideoOverlay>
              <Reveal bottom cascade>
                <h2>
                  Securing the world
                  <br />
                  <span>one device at a time</span>
                </h2>
              </Reveal>
            </FirstVideoOverlay>
          )}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <video autoPlay muted>
            <source
              type="video/mp4"
              src="https://bdatawebsitenew.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(14).mp4"
            />
          </video>
          <SecondVideoOverlay>
            <Jump>
              <h2>Apply Zero Trust</h2>
              <h3>using device immutable fingerprints</h3>
              <h2>to end Ransomware</h2>
            </Jump>
          </SecondVideoOverlay>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <video autoPlay muted>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/1.mp4"
            />
          </video>
          <ThirdVideoOverlay>
            <Fade left>
              <h2 className="text-center">
                A robust multilayer
                <br /> cyber security
              </h2>
            </Fade>
          </ThirdVideoOverlay>
        </Carousel.Item>
      </Carousel> */}
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

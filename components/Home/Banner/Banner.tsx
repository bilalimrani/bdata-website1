import React, { useEffect, useState } from "react";
import Reveal from "react-reveal/Reveal";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import AnimatedText from "react-animated-text-content";
// import ReactPlayer from "react-player";
import {
  BannerWrapper,
  A,
  FirstVideoOverlay,
  SecondVideoOverlay,
  ThirdVideoOverlay,
} from "./Banner.style";
// import BannerVideo from "../../../public/img/homeBanner.mp4";

export default function Banner({ data = {}, sideImage = true }) {
  const { bgImage, title, subTitle }: any = data;
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 1000);
  }, []);

  return (
    <BannerWrapper>
      <Carousel fade indicators={false}>
        <Carousel.Item interval={8000}>
          <video autoPlay muted>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(7).mp4"
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
        <Carousel.Item interval={8000}>
          <video autoPlay muted>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(8).mp4"
            />
          </video>
          <SecondVideoOverlay>
            <Jump>
              <h2>Apply Zero Trust</h2>
              <h2>using device immutable fingerprints</h2>
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
              {/* <ul>
                <li>Immutable Fingerprint based Segragated IT/IO Network.</li>
                <li>Realtime malware hunting.</li>
                <li>Firewall Management.</li>
                <li>Endpoint Monitoring.</li>
                <li>Vulnerability Detection.</li>
                <li>Automated Cyber Response.</li>
                <li>Endpoint Monitoring.</li>
                <li>Anomaly Detection.</li>
              </ul> */}
            </Fade>
          </ThirdVideoOverlay>
        </Carousel.Item>
      </Carousel>
      <A
        href="https://demo.org.bdata.ca"
        target="_blank"
        className="btn btn-light"
      >
        Start free trial
      </A>
    </BannerWrapper>
  );
}

import React, { useEffect } from "react";
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
  // const BannerVideo = require("public/img/homeBanner.mp4");

  useEffect(() => {}, [JSON.stringify(data)]);

  return (
    // <BannerWrapper>
    //   <video autoPlay loop muted>
    //     <source
    //       type="video/mp4"
    //       src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(3).mp4"
    //     />
    //   </video>
    //   <div className="overlay">
    //     <AnimatedText
    //       type="words"
    //       animation={{
    //         x: "200px",
    //         y: "-20px",
    //         scale: 1.1,
    //         ease: "ease-in-out",
    //       }}
    //       animationType="float"
    //       interval={0.06}
    //       duration={0.8}
    //       tag="p"
    //       className="animated-paragraph"
    //       includeWhiteSpaces
    //       threshold={0.1}
    //       rootMargin="20%"
    //     >
    //       Content to animate
    //     </AnimatedText>
    //   </div>
    //   <A
    //     href="https://demo.org.bdata.ca"
    //     target="_blank"
    //     className="btn btn-light"
    //   >
    //     Start free trial
    //   </A>

    // </BannerWrapper>
    <BannerWrapper>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(7).mp4"
            />
          </video>
          <FirstVideoOverlay>
            <Reveal effect="fadeInUp">
              <h2>
                Securing the world{" "}
                <span>
                  one <br />
                  device at a time
                </span>
              </h2>
            </Reveal>
          </FirstVideoOverlay>
        </Carousel.Item>
        <Carousel.Item>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(8).mp4"
            />
          </video>
          <SecondVideoOverlay>
            <Jump>
              <h2>Apply zero trust</h2>
              <h3>using device immutable fingerprints</h3>
              <h2>to end ransomware</h2>
            </Jump>
          </SecondVideoOverlay>
        </Carousel.Item>
        <Carousel.Item>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/1.mp4"
            />
          </video>
          <ThirdVideoOverlay>
            <Fade left>
              <h2>A Robust Multilayer Cyber Security</h2>
              <ul>
                <li>Immutable Fingerprint based Segragated IT/IO Network.</li>
                <li>Realtime malware hunting.</li>
                <li>Firewall Management.</li>
                <li>Endpoint Monitoring.</li>
                <li>Vulnerability Detection.</li>
                <li>Automated Cyber Response.</li>
                <li>Endpoint Monitoring.</li>
                <li>Anomaly Detection.</li>
              </ul>
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

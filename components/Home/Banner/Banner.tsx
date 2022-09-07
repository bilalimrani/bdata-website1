import React from "react";
import Reveal from "react-reveal/Reveal";
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
        <Carousel.Item interval={5000}>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(5).mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <FirstVideoOverlay>
            <Reveal effect="fadeInUp">
              <h1>Securing the world one device at a time</h1>
            </Reveal>
          </FirstVideoOverlay>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(6).mp4"
            />
          </video>
          <SecondVideoOverlay>
            <AnimatedText
              type="words"
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="h1"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Apply zero trust using device immutable fingerprints to end
              ransomware
            </AnimatedText>
          </SecondVideoOverlay>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <video autoPlay muted loop>
            <source
              type="video/mp4"
              src="https://bdata-files.s3.us-west-2.amazonaws.com/Apply+Zero+Trust+Using+Device+Immutable+Fingerprints+to+end+ransomware+(4).mp4"
            />
          </video>
          <ThirdVideoOverlay>
            <Fade left>
              <h1>
                Apply zero trust using device immutable fingerprints to end
                ransomware
              </h1>
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

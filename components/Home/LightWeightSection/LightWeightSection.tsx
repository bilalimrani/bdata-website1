import React from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  H1,
  Button,
  InfoArea,
  SideImage,
  SectionImage,
  UL,
} from "./LightWeightSection.style";
const Frame78 = require("public/img/frame78.png");

export default function LightWeightSection() {
  return (
    <LightWeightSectionWrapper className="">
      <InfoArea>
        <SideImage src="https://i.ibb.co/MV2SwwN/Group-1679-1.png" />
        <div className="container">
          <div className="row mt-2">
            <div className="col-12 col-md-4">
              <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage>
            </div>
            <div className="col-12 offset-md-1 col-md-7">
              <H1>Guide to create a secure network of trusted devices</H1>
              <p>
                Cyber-attack is not a science fiction, It’s a threat to public
                safety and business continuity.
              </p>
              <UL>
                <li>Visit B Data & Humber College Cyber Lab</li>
                <li>
                  Reserve a spot for Free cyber-attack awareness workshop.
                </li>
              </UL>
              <Button type="button" className="btn btn-primary">
                Download
              </Button>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-7 mt-2">
              <H1>OT System Vulnerabilities</H1>
              <p>
                Achieving cyber resilience to meet cyber compliance requirements
                is a complex, time- consuming and expensive exercise for any
                company. Hedgehog security technology is a ready to use cyber
                security solution which effectively mitigate the risk of
                cyber-attack and help companies to achieve cyber resilience and
                compliance with up to 80% cost saving.
              </p>
              <Button type="button" className="btn btn-primary">
                Download
              </Button>
            </div>
            <div className="col-12 col-md-4 mt-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-4 mt-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
            <div className="col-12  col-md-7 mt-2">
              <H1>Lightweight cyber security solution</H1>
              <p>
                Cyber-attack vulnerabilities related to Industrial Control
                System (ICS) or operational technology (OT) as well as
                industrial internet of things (IIoT) are increasing each year,
                with an appreciable increase in identified vulnerabilities from
                2020 to 2021.Some vulnerability includes the following. Modbus
                TCP port 502, server access, DDoS, RATs, Insiders, Credential
                harvesting
              </p>
              <Button type="button" className="btn btn-primary">
                Download
              </Button>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12  col-md-7 mt-2">
              <H1>Protect Credentials Using BIoT Security Technology</H1>
              <p>
                In addition to finance and manufacturing, professional and
                business services was heavily targeted in 2021 cyber-attacks,
                particularly by ransomware actors, each of the cyber-attacks had
                a root cause of credential compromise either by DDoS, Insiders,
                or credential harvesting.
              </p>
              <Button type="button" className="btn btn-primary">
                Download
              </Button>
            </div>
            <div className="col-12 offset-md-1 col-md-4 mt-2">
              <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage>
            </div>
          </div>
        </div>
      </InfoArea>
    </LightWeightSectionWrapper>
  );
}

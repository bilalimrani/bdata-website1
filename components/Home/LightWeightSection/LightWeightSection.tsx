import React, { useState } from "react";
// import Image from "next/image";
import { Modal, Form } from "react-bootstrap";
import DownlaodWhitePaper from "../DownloadWhitePaper/DownloadWhitePaper";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
  UL,
} from "./LightWeightSection.style";
const Frame78 = require("public/img/frame78.png");
import BookImg from "../../../components/BookImg/BookImg";

export default function LightWeightSection() {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setSection(event.target.id)
    setShow(true)
  };

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  return (
    <LightWeightSectionWrapper className="">
      <InfoArea>
        {/* <SideImage src="https://i.ibb.co/MV2SwwN/Group-1679-1.png" /> */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 py-2">
              <BookImg />
              {/* <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage> */}
            </div>
            <div className="col-12 col-lg-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Guide to create a secure network of trusted devices
                </h3>
                <p className="m-0">
                  Cyber-attack is not a science fiction, It’s a threat to public
                  safety and business continuity.
                </p>
                <UL>
                  <li>Visit B Data & Humber College Cyber Lab</li>
                  <li>
                    Reserve a spot for Free cyber-attack awareness workshop.
                  </li>
                </UL>
                <Button onClick={handleShow} id="section1" type="button" className="btn btn-primary">
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  OT System Vulnerabilities
                </h3>
                <p className="custom-padding m-0">
                  Achieving cyber resilience to meet cyber compliance
                  requirements is a complex, time- consuming and expensive
                  exercise for any company. Hedgehog security technology is a
                  ready to use cyber security solution which effectively
                  mitigate the risk of cyber-attack and help companies to
                  achieve cyber resilience and compliance with up to 80% cost
                  saving.
                </p>
                <Button onClick={handleShow} id="section2" type="button" className="btn btn-primary">
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-3 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Lightweight cyber security solution
                </h3>
                <p className="custom-padding m-0">
                  Cyber-attack vulnerabilities related to Industrial Control
                  System (ICS) or operational technology (OT) as well as
                  industrial internet of things (IIoT) are increasing each year,
                  with an appreciable increase in identified vulnerabilities
                  from 2020 to 2021.Some vulnerability includes the following.
                  Modbus TCP port 502, server access, DDoS, RATs, Insiders,
                  Credential harvesting
                </p>
                  <Button onClick={handleShow} id="section3" type="button" className="btn btn-primary">
                    Download
                  </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12  col-lg-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage>
            </div>
            <div className="col-12  col-lg-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Protect Credentials Using BIoT Security Technology
                </h3>
                <p className="custom-padding m-0">
                  In addition to finance and manufacturing, professional and
                  business services was heavily targeted in 2021 cyber-attacks,
                  particularly by ransomware actors, each of the cyber-attacks
                  had a root cause of credential compromise either by DDoS,
                  Insiders, or credential harvesting.
                </p>
                  <Button onClick={handleShow} id="section4" type="button" className="btn btn-primary">
                    Download
                  </Button>
              </ContainerDefault>
            </div>
          </div>
        </div>
        <Modal className="modal-xl" show={show} onHide={handleClose}>
          <Modal.Body>
            <DownlaodWhitePaper data={section} onSubmit={onLoginFormSubmit}  handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </InfoArea>
    </LightWeightSectionWrapper>

  );
}

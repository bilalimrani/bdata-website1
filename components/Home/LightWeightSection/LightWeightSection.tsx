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
const Frame78 = require("public/img/zero-trust.webp");
const screen = require("public/img/screen.webp");
const technology = require("public/img/technology.webp");


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
              <BookImg title="Zero trust - a multilayer cyber security for industrial control system" img={Frame78}/>
              {/* <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage> */}
            </div>
            <div className="col-12 col-lg-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                Zero trust - a multilayer cyber security for industrial control system
                </h3>
                <p className="custom-padding m-0">
                BIoT Security Technology IS a lightweight multilayer cyber security solution which enables companies to achieve cyber security compliances with respect to TSA, IECT 62443, ISO, NIST, HIPAA, and other local and international standards. 
                </p>
                {/* <UL>
                  <li>Visit B Data & Humber College Cyber Lab</li>
                  <li>
                    Reserve a spot for Free cyber-attack awareness workshop.
                  </li>
                </UL> */}
                <Button onClick={handleShow} id="section1" type="button" className="btn btn-primary">
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-3 order-lg-2 py-2">
            <BookImg title="Immutable Device Fingerprint Based Segregated/Airgap network for IT/OT/IoT devices" img={screen}/>
              {/* <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage> */}
            </div>
            <div className="col-12  col-lg-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                Immutable Device Fingerprint Based Segregated/Airgap network for IT/OT/IoT devices
                </h3>
                <p className="custom-padding m-0">
                BIoT technology creates immutable fingerprints for each device before it gets enabled to connect and communicate with designated servers/cloud infrastructure. Each device is uniquely identified based on the fingerprints, which contain information about the device hardware, processors etc. 
                </p>
                <p className="custom-padding m-0">
                Based on the fingerprints, devices are identified as IT or OT and can only communicate with designated servers. 
                </p>
                <Button onClick={handleShow} id="section2" type="button" className="btn btn-primary">
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-3 py-2">
            <BookImg title="enhance cyber security for azure and aws iot hub using biot" img={technology}/>

              {/* <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage> */}
            </div>
            <div className="col-12  col-lg-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                enhance cyber security for azure and aws iot hub using biot
                </h3>
                <p className="custom-padding m-0">
                BIoT Security technology enhance azure and aws iot hub security and ensures complete autonomy of cyber security using pki (public private key infrastructure) and immutable device fingerprint authentication.
                </p>
                  <Button onClick={handleShow} id="section3" type="button" className="btn btn-primary">
                    Download
                  </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12  col-lg-3 order-lg-2 py-2">
            <BookImg title="Immutable Device Fingerprint Based Segregated/Airgap network for IT/OT/IoT devices" img={screen}/>
              {/* <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage> */}
            </div>
            <div className="col-12  col-lg-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                Immutable Device Fingerprint Based Segregated/Airgap network for IT/OT/IoT devices
                </h3>
                <p className="custom-padding m-0">
                BIoT technology creates immutable fingerprints for each device before it gets enabled to connect and communicate with designated servers/cloud infrastructure. Each device is uniquely identified based on the fingerprints, which contain information about the device hardware, processors etc. 
                </p>
                <p className="custom-padding m-0">
                Based on the fingerprints, devices are identified as IT or OT and can only communicate with designated servers. 
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

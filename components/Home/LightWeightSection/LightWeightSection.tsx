import React, { useState } from "react";
// import Image from "next/image";
import { Modal } from "react-bootstrap";
import DownlaodWhitePaper from "../DownloadWhitePaper/DownloadWhitePaper";
import "bootstrap/dist/css/bootstrap.css";
// import Link from "next/link";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  // SectionImage,
  // UL,
} from "./LightWeightSection.style";
import homeConstants from "../../../utils/home.constants";
const Frame78 = require("public/img/zero-trust.webp");
const screen = require("public/img/section4.svg");
const technology = require("public/img/technology.webp");

import BookImg from "../../../components/BookImg/BookImg";

export default function LightWeightSection() {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setSection(event.target.id);
    setShow(true);
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
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <BookImg
                title={homeConstants.lightWeightSection.section1.title}
                img={Frame78}
              />
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                  {homeConstants.lightWeightSection.section1.title}
                </h3>
                <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section1.subTitle}
                </p>
                {/* <UL>
                  <li>Visit B Data & Humber College Cyber Lab</li>
                  <li>
                    Reserve a spot for Free cyber-attack awareness workshop.
                  </li>
                </UL> */}
                <Button
                  onClick={handleShow}
                  id="section1"
                  type="button"
                  className="btn btn-primary"
                >
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 order-lg-2 py-2">
              <BookImg
                title={homeConstants.lightWeightSection.section2.title}
                img={screen}
              />
              {/* <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage> */}
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                  {homeConstants.lightWeightSection.section2.title}
                </h3>
                <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section2.subTitle1}
                </p>
                <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section2.subTitle2}
                </p>
                <Button
                  onClick={handleShow}
                  id="section2"
                  type="button"
                  className="btn btn-primary"
                >
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <BookImg
                title={homeConstants.lightWeightSection.section3.title}
                img={technology}
              />

              {/* <SectionImage>
                <img className="img w-100" src={Frame78} />
              </SectionImage> */}
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                  {homeConstants.lightWeightSection.section3.title}
                </h3>
                <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section3.subTitle}
                </p>
                <Button
                  onClick={handleShow}
                  id="section3"
                  type="button"
                  className="btn btn-primary"
                >
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 order-lg-2 py-2">
              <BookImg
                title={homeConstants.lightWeightSection.section4.title}
                img={screen}
              />
              {/* <SectionImage>
                <img className="img w-100" src={Frame78}></img>
              </SectionImage> */}
            </div>
            <div className="col-12 col-lg-8 col-xl-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold text-uppercase">
                  {homeConstants.lightWeightSection.section4.title}
                </h3>
                <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section4.subTitle}
                </p>
                {/* <p className="custom-padding m-0">
                  {homeConstants.lightWeightSection.section4.subTitle2}
                </p> */}
                <Button
                  onClick={handleShow}
                  id="section4"
                  type="button"
                  className="btn btn-primary"
                >
                  Download
                </Button>
              </ContainerDefault>
            </div>
          </div>
        </div>
        <Modal className="modal-xl" show={show} onHide={handleClose}>
          <Modal.Body>
            <DownlaodWhitePaper
              data={section}
              onSubmit={onLoginFormSubmit}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </InfoArea>
    </LightWeightSectionWrapper>
  );
}

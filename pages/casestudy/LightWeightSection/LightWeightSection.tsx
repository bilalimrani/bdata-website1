import React, { useState } from "react";
// import Image from "next/image";
import {
  LightWeightSectionWrapper,
  Button,
  InfoArea,
  ContainerDefault,
  SectionImage,
} from "../../../styles/styledComponents/caseStudyLightWeightSection.style";
import DownlaodWhitePaper from "../../../components/Home/DownloadWhitePaper/DownloadWhitePaper";
import BookImg from "../../../components/BookImg/BookImg";
import caseStudyConstants from "../../../utils/caseStudy.constants"
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const automotive = require("public/img/automotive.png");
const goldmine = require("public/img/goldmine.png");

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
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <BookImg title={caseStudyConstants.useCase.section1.title} img={automotive} />
                {/* <img className="img w-100" src={telecom}></img> */}
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                {caseStudyConstants.useCase.section1.title}
                </h3>
                <p className="custom-padding m-0">
                {caseStudyConstants.useCase.section1.subTitle}
                </p>
                <Button onClick={handleShow} id="useCase1" type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <BookImg title={caseStudyConstants.useCase.section2.title} img={goldmine} />
                {/* <img className="img w-100" src={defence} /> */}
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8  col-xl-9 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                {caseStudyConstants.useCase.section2.title}
                </h3>
                <p className="custom-padding m-0">
                {caseStudyConstants.useCase.section2.subTitle}
                </p>
                <Button onClick={handleShow} id="useCase2" type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          {/* <div className="row my-lg-5">
            <div className="col-12 col-lg-4 col-xl-3 py-2">
              <SectionImage>
                <img className="img w-100" src={oilgas} />
              </SectionImage>
            </div>
            <div className="col-12  col-lg-8 col-xl-9 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 3
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-4  col-xl-3 order-lg-2 py-2">
              <SectionImage>
                <img className="img w-100" src={utilities}></img>
              </SectionImage>
            </div>
            <div className="col-12 col-lg-8  col-xl-9 order-lg-1 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  Case Study 4
                </h3>
                <p className="custom-padding m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <Button type="button" className="btn btn-primary">
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div> */}
        </div>
        <Modal className="modal-xl" show={show} onHide={handleClose}>
          <Modal.Body>
            <DownlaodWhitePaper data={section} onSubmit={onLoginFormSubmit} handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </InfoArea>
    </LightWeightSectionWrapper>
  );
}

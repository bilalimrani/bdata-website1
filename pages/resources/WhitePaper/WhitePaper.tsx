import React, { useState } from "react";
import {
  PaperWraper,
  CardWrapper,
  Button,
  SectionPadding,
} from "../../../styles/styledComponents/WhitePaperPage.style";
import Image from "next/image";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DownlaodWhitePaper from "../../../components/Home/DownloadWhitePaper/DownloadWhitePaper";
import BookImg from "../../../components/BookImg/BookImg";
import resourceConstant from "../../../utils/resources.constants";
const screen = require("public/img/screen.webp");
const technology = require("public/img/technology.webp");
const telecom = require("public/img/telecom.png");
const defence = require("public/img/defence.png");
const oilgas = require("public/img/oil&gas.png");
const utilities = require("public/img/utilities.png");
const Frame78 = require("public/img/zero-trust.webp");

export default function WhitePaper() {
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
  const section1 = (props) => (
    <Tooltip {...props}>{resourceConstant.section1.title}</Tooltip>
  );
  const section2 = (props) => (
    <Tooltip {...props}>{resourceConstant.section2.title}</Tooltip>
  );
  const section3 = (props) => (
    <Tooltip {...props}>{resourceConstant.section3.title}</Tooltip>
  );
  const section4 = (props) => (
    <Tooltip {...props}>{resourceConstant.section4.title}</Tooltip>
  );
  return (
    <PaperWraper>
      <SectionPadding>
        <h3 className="text-center m-0  fw-bold">Whitepapers</h3>
      </SectionPadding>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <BookImg title={resourceConstant.section1.title} img={Frame78} />
          <CardWrapper>
            {/* <OverlayTrigger placement="bottom" overlay={section1}> */}
            <h4 className="m-0 my-4 fw-bold">
              {resourceConstant.section1.title}
            </h4>
            {/* </OverlayTrigger> */}
            <Button
              onClick={handleShow}
              id="section1"
              type="button"
              className="btn btn-primary"
            >
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <BookImg title={resourceConstant.section2.title} img={screen} />
          <CardWrapper>
            {/* <OverlayTrigger placement="bottom" overlay={section2}> */}
            <h4 className="m-0 my-4 fw-bold">
              {resourceConstant.section2.title}
            </h4>
            {/* </OverlayTrigger> */}
            <Button
              onClick={handleShow}
              id="section2"
              type="button"
              className="btn btn-primary"
            >
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <BookImg title={resourceConstant.section3.title} img={defence} />

          <CardWrapper>
            {/* <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            /> */}
            {/* <OverlayTrigger placement="bottom" overlay={section3}> */}
            <h4 className="m-0 my-4 fw-bold">
              {resourceConstant.section3.title}
            </h4>
            {/* </OverlayTrigger> */}
            <Button
              onClick={handleShow}
              id="section3"
              type="button"
              className="btn btn-primary"
            >
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <BookImg title={resourceConstant.section4.title} img={technology} />
          <CardWrapper>
            {/* <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            /> */}
            {/* <OverlayTrigger placement="bottom" overlay={section4}> */}
            <h4 className="m-0 my-4 fw-bold">
              {resourceConstant.section4.title}
            </h4>
            {/* </OverlayTrigger> */}
            <Button
              onClick={handleShow}
              id="section4"
              type="button"
              className="btn btn-primary"
            >
              Request Download
            </Button>
          </CardWrapper>
        </div>
        {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <CardWrapper>
            <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            />
            <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
            <Button type="button" className="btn btn-primary">
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <CardWrapper>
            <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            />
            <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
            <Button type="button" className="btn btn-primary">
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <CardWrapper>
            <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            />
            <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
            <Button type="button" className="btn btn-primary">
              Request Download
            </Button>
          </CardWrapper>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <CardWrapper>
            <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            />
            <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
            <Button type="button" className="btn btn-primary">
              Request Download
            </Button>
          </CardWrapper>
        </div> */}
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
    </PaperWraper>
  );
}

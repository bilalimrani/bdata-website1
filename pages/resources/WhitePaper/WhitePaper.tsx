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
import DownlaodWhitePaper from "../../../components/Home/DownloadWhitePaper/DownloadWhitePaper";
const PaperImg = require("public/img/paperimg.svg");

export default function WhitePaper() {
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
    <PaperWraper>
      <SectionPadding>
        <h3 className="text-center m-0  fw-bold">Whitepapers</h3>
      </SectionPadding>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding">
          <CardWrapper>
            <Image
              src={PaperImg}
              width="100%"
              height="300px"
              className="img-responsive"
            />
            <h4 className="m-0 my-4 fw-bold">Technical Whitepaper</h4>
            <Button onClick={handleShow} id="section1" type="button" className="btn btn-primary">
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
            <Button onClick={handleShow} id="section2" type="button" className="btn btn-primary">
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
            <Button onClick={handleShow} id="section3" type="button" className="btn btn-primary">
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
            <Button onClick={handleShow} id="section4" type="button" className="btn btn-primary">
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
          <DownlaodWhitePaper data={section} onSubmit={onLoginFormSubmit} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </PaperWraper>
  );
}

import React, { useState } from "react";
import {
  PaperWraper,
  CardWrapper,
  Button,
  SectionPadding,
} from "../../../styles/styledComponents/UseCase.style";
import Image from "next/image";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DownlaodWhitePaper from "../../../components/Home/DownloadWhitePaper/DownloadWhitePaper";
const PaperImg = require("public/img/paperimg.svg");

export default function UseCase() {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (event: any) => {
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
        <h3 className="text-center m-0  fw-bold">Use Case</h3>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 1</h4>
            <Button onClick={handleShow} id="useCase1" type="button" className="btn btn-primary">
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
            <h4 className="m-0 my-4 fw-bold">Use Case 2</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 3</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 3</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 4</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 5</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 6</h4>
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
            <h4 className="m-0 my-4 fw-bold">Use Case 7</h4>
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

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  PaperWraper,
  CardWrapper,
  Button,
  SectionPadding,
} from "../../../styles/styledComponents/WhitePaperPage.style";
// import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import DownlaodWhitePaper from "../../../components/Home/DownloadWhitePaper/DownloadWhitePaper";
import BookImg from "../../../components/BookImg/BookImg";
import resourceConstant from "../../../utils/resources.constants";

export default function WhitePaper() {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState();
  const handleClose = () => setShow(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleShow = (event) => {
    setSection(event.target.id);
    setSelectedData(event.target.attributes.getNamedItem("data-id").value);

    setShow(true);
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
        {resourceConstant?.whitePapers?.map((item, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3 custom-padding"
            key={index}
          >
            <BookImg title={item.title} img={item.img} />
            <CardWrapper>
              {/* <OverlayTrigger placement="bottom" overlay={section1}> */}
              <h5 className="m-0 my-4 fw-bold">{item.title}</h5>
              {/* </OverlayTrigger> */}
              <Button
                onClick={handleShow}
                id={`section${index + 1}`}
                type="button"
                data-id={item.title}
                className="btn btn-primary"
              >
                Request Download
              </Button>
            </CardWrapper>
          </div>
        ))}
      </div>
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <DownlaodWhitePaper
            data={section}
            selected={selectedData}
            type="BDATA Whitepaper"
            onSubmit={onLoginFormSubmit}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </PaperWraper>
  );
}

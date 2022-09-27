import React, { useState } from "react";
import { Partners ,Button } from "../../../styles/styledComponents/partners.style";
import partners from "../../../utils/partners.constant";
import Image from "next/image";
import { Modal, Form } from "react-bootstrap";
import Partnership from "../partnership/partnership";
import {IoIosClose}  from "react-icons/io";
const partnersImg = require("public/img/partners.svg");

export default function Banner() {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (event: any) => {
    setSection(event.target.id);
    setShow(true);
  };
  return (
    <>
    <Partners>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 custom-mobile-wrapper">
            <div className="banner-content-wrapper">
              <h2 className="fw-bold">{partners.banner.title}</h2>
              <p>{partners.banner.subTitle1}</p>
              <Button onClick={handleShow} className="btn btn-primary mt-2">
              Apply for partnership program
              </Button>
            </div>
          </div>
          <div className="col-sm-6 image-wrapper">
            <Image
                src={partnersImg}
                className="w-100"
                height="400px"
                alt="bdata"
                width="100%"
              />
          </div>
        </div>
      </div>
    </Partners>
    
  <Modal className="modal-xl" show={show} onHide={handleClose} centered>
  <Modal.Body className="p-0">
    <Partnership
      // data={section}
      // onSubmit={onLoginFormSubmit}
      handleClose={handleClose}
    />
  </Modal.Body>
</Modal>
 </>
  );
}


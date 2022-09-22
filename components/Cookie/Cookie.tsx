import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CookieConsent, { Cookies } from "react-cookie-consent";
import {CookieContainer,Button} from "./Cookie.style";
import CookieModalContent from "./CookieModalContent";
const Cookie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    // setSection(event.target.id);
    setShow(true);
  };
  return (
    <>
    <CookieContainer>
    <CookieConsent
      location="bottom"
      // declineButtonText="I decline"
      // buttonText="Accept All"
      // enableDeclineButton
      // flipButtons
      // cookieName="general"
      expires={999}
      overlay
    >
      <div className="custom-flex">
  <p> We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.</p> 
     
     <div className="custom-flex">
      <Button
                  onClick={handleShow}
                  id="section1"
                  type="button"
                  className="btn btn-primary"
                >
                  Cookie Setting
                </Button>
                <Button className="btn btn-primary ms-4">
                  Accept All
                </Button>
                </div>
                </div>
    </CookieConsent>
    </CookieContainer>
        <Modal className="modal-lg" show={show} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <CookieModalContent   handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
      </>
  );
};
export default Cookie;

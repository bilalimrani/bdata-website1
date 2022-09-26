import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { CookieContainer, Button } from "./Cookie.style";
import CookieModalContent from "./CookieModalContent";
const Cookie = () => {
  const cookieConsentRef: any = React.createRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    // setSection(event.target.id);
    setShow(true);
  };

  const onAccept = () => {
    cookieConsentRef.current.accept();
  };

  console.log("cookieConsentRef", cookieConsentRef);
  return (
    <>
      <CookieContainer>
        <CookieConsent
          ref={cookieConsentRef}
          buttonStyle={{ display: "none" }}
          expires={999}
          overlay
        >
          <div className="custom-flex">
            <p>
              We use cookies on our website to give you the most relevant
              experience by remembering your preferences and repeat visits. By
              clicking “Accept All”, you consent to the use of ALL the cookies.
              However, you may visit "Cookie Settings" to provide a controlled
              consent.
            </p>

            <div className="custom-flex">
              <Button
                onClick={handleShow}
                id="section1"
                type="button"
                className="btn btn-primary"
              >
                Cookie Setting
              </Button>
              <Button onClick={onAccept} className="btn btn-primary ms-4">
                Accept All
              </Button>
            </div>
          </div>
        </CookieConsent>
      </CookieContainer>
      <Modal className="modal-lg" show={show} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <CookieModalContent handleClose={handleClose} acceptAll={onAccept} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Cookie;

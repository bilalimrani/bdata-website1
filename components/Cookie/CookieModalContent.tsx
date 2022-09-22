import React, { useState, useEffect } from "react";
import {IoIosClose}  from "react-icons/io";
import {ModalWrapper,MainWrapperAccordian,Button} from "./Cookie.style";
import Accordion from "react-bootstrap/Accordion";

const CookieModalContent = (props) => {
    const [showText, setShowText] = useState(true);

    const handleClose = () => {
        props.handleClose();
      };
      const textClick = () => {

      }
    return(
        <ModalWrapper>
        <div className="custom-modal-header">
        <h4 className="heading fw-bold m-0">Privacy Overview</h4>
        <button onClick={handleClose}><IoIosClose /></button>
        </div>
        <div className="modal-body">
            <p className={showText ? "para-clamp" : ""}>This website uses cookies to improve your experience while you navigate through the website. Out of these, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may affect your browsing experience.</p>
            <button className="transparent-btn" onClick={() => setShowText(!showText)}>{showText ? "Show more" : "Show less"}</button>
            <MainWrapperAccordian>
          <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordian-btn">
                  <div className="header-wrapper">
                    <div className="left-align-text">
                      <h4 className="jobTitle">Neccessary</h4>
                    </div>
                    <div className="timer-counter">
                      <p>Always Enabled</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                 
									Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.								
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordian-btn">
                  <div className="header-wrapper">
                    <div className="left-align-text">
                      <h4 className="jobTitle">Non-Neccessary</h4>
                    </div>
                    <div className="checkboxwrapper me-3">
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="customid">Disabled</label>
                        <input className="form-check-input" type="checkbox" id="customid" />
                        
                        </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                Any cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.
                </Accordion.Body>
              </Accordion.Item>
         
          </Accordion>
        </MainWrapperAccordian>
        <div className="btnGroup">
           
           <Button
             // disabled={isLoading}
             type="submit"
             className="btn btn-primary btn-block"
           >
             Save & Accept
           </Button>
         </div>
        </div>
        </ModalWrapper>
    )
}
export default CookieModalContent;
// import Accordion from "../../../components/Accordian";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import careerConstants from "../../../utils/career.constants";
import { MainWrapperAccordian, ListWrapper, Wrapper } from "./Listing.style";
const favicon = require("public/img/favicon.png");
const Internetimg = require("public/img/internet-img.svg");
const remote = require("public/img/fullname.svg");
const fulltime = require("public/img/location.svg");

const JobListing = () => {
  return (
    <Wrapper>
      <div className="section-wrapper">
        {/* <Accordion title="Product Manager" content="this is content 1" time="3 days Ago" />
            <Accordion title="Sale Manager" content="this is content 2" time="5 days Ago"/> */}
        <h3>We are looking for the following positions:</h3>
        <MainWrapperAccordian>
          <Accordion defaultActiveKey="0" flush>
            {careerConstants?.jobListing.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header className="accordian-btn">
                  <div className="header-wrapper">
                    <div className="left-align-text">
                      <Image
                        src={favicon}
                        alt="bdata"
                        width="25px"
                        height="30px"
                        className="imageIcons"
                      />
                      <h4 className="jobTitle">{item.title}</h4>
                    </div>
                    <div className="timer-counter">
                      <p>{item.time}</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordian-body-wrapper">
                    <div className="accordian-body-header">
                      <div className="job-details">
                        <div className="job-details-list">
                          <Image
                            src={Internetimg}
                            alt="bdata"
                            width="18px"
                            height="18px"
                            className="imageIcons"
                          />
                          <p>{item.type}</p>
                        </div>
                        <div className="job-details-list">
                          <Image
                            src={fulltime}
                            alt="bdata"
                            width="18px"
                            height="18px"
                            className="imageIcons"
                          />
                          <p>{item.location}</p>
                        </div>
                        <div className="job-details-list">
                          <Image
                            src={remote}
                            alt="bdata"
                            width="18px"
                            height="18px"
                            className="imageIcons"
                          />
                          <p>{item.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="qualification-wrapper">
                      <p className="fw-bold">
                        Qualifications, Skills & Responsibilities :
                      </p>
                      <ListWrapper>
                        {item.points.map((item1, index1) => (
                          <p key={index1}>{item1}</p>
                        ))}
                      </ListWrapper>
                      <p className="mt-2 mb-0 apply-link">
                        Apply at
                        <a
                          href="mailto:info@Bdata.ca"
                          target="_self"
                          title="info@Bdata.ca"
                          className="bdata-links-p ms-1 email1"
                        >
                          <span>info@Bdata.ca</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </MainWrapperAccordian>
      </div>
    </Wrapper>
  );
};
export default JobListing;

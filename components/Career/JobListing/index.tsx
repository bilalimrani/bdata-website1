// import Accordion from "../../../components/Accordian";
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
const favicon = require("public/img/favicon.png");
const Internetimg = require("public/img/internet-img.svg");
const remote = require("public/img/fullname.svg");
const fulltime = require("public/img/location.svg");
import {MainWrapperAccordian,ListWrapper} from "./Listing.style";



const JobListing = () => {
    return(
        <>
        <div className="section-wrapper">
            {/* <Accordion title="Product Manager" content="this is content 1" time="3 days Ago" />
            <Accordion title="Sale Manager" content="this is content 2" time="5 days Ago"/> */}
         <MainWrapperAccordian>
            <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className='header-wrapper'>
                                <div className="left-align-text">
                                    <Image
                                        src={favicon}
                                        alt="Picture of the author"
                                        width="25px"
                                        height="30px"
                                        className="imageIcons"
                                    />
                                    <h2>Product Manager</h2>
                                    </div>
                                    <div className="timer-counter">
                                        <p>3 days</p>
                                    </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className='accordian-body-wrapper'>
                            <div className='accordian-body-header'>
                                <div className='job-details'>
                                    <div className='job-details-list'>
                                    <Image
                                        src={Internetimg}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Internet and Technology</p>
                                    </div>
                                    <div className='job-details-list'>
                                    <Image
                                        src={fulltime}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Remote</p>
                                    </div>
                                    <div className='job-details-list'>
                                    <Image
                                        src={remote}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Full time</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="qualification-wrapper">
                                    <p className='fw-bold'>Qualifications, Skills & Responsibilities :</p>
                                    <ListWrapper>
                                        <p>Excellent written and verbal communication skills</p>
                                        <p>Good leadership, organization, and time management skills</p>
                                        <p>Outstanding attention to detail</p>
                                        <p>Understanding of the products or services the business sells and the industry that the company works in Analysis skills to interpret sales statistics and marketing data</p>
                                        <p>Financial skills to follow a budget and evaluate the future profitability of products</p>
                                        <p>Ability to adapt to unexpected events such as disruptions to production or shipping delays</p>
                        
                                    </ListWrapper>
                                    <p className='mt-2 mb-0 apply-link'>Apply at<a href="mailto:info@Bdata.ca" target="_self" title="info@Bdata.ca" className="bdata-links-p ms-1 email1"><span>info@Bdata.ca</span></a></p>
                                </div>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        <div className='header-wrapper'>
                                <div className="left-align-text">
                                    <Image
                                        src={favicon}
                                        alt="Picture of the author"
                                        width="25px"
                                        height="30px"
                                        className="imageIcons"
                                    />
                                    <h2>Sale Manager</h2>
                                    </div>
                                    <div className="timer-counter">
                                        <p>3 days</p>
                                    </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className='accordian-body-wrapper'>
                            <div className='accordian-body-header'>
                                <div className='job-details'>
                                    <div className='job-details-list'>
                                    <Image
                                        src={Internetimg}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Internet and Technology</p>
                                    </div>
                                    <div className='job-details-list'>
                                    <Image
                                        src={fulltime}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Remote</p>
                                    </div>
                                    <div className='job-details-list'>
                                    <Image
                                        src={remote}
                                        alt="Picture of the author"
                                        width="18px"
                                        height="18px"
                                        className="imageIcons"
                                    />
                                        <p>Full time</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="qualification-wrapper">
                                    <p className='fw-bold'>Qualifications, Skills & Responsibilities :</p>
                                    <ListWrapper>
                                        <p>Overseeing local and regional sales, promotions and campaigns</p>
                                        <p>Planning and directing the hiring and training of new Sales Representatives</p>
                                        <p>Directing and coordinating all sales activities locally and regionally</p>
                                        <p>Preparing sales budgets and projections and approving expenditures</p>
                                        <p>Tracking and analyzing sales statistics based on key quantitative metrics</p>
                                        <p>Handling and resolving customer complaints regarding a product or service</p>
                                        <p>Setting discount rates and determining price schedules</p>
                                        <p>Advising distributors and dealers on policies and Standard Operating Procedures (SOPs)</p>
                                        <p>Serving as the face of the organization to internal and external partners</p>
                        
                                    </ListWrapper>
                                    <p className='mt-2 mb-0 apply-link'>Apply at<a href="mailto:info@Bdata.ca" target="_self" title="info@Bdata.ca" className="bdata-links-p ms-1 email1"><span>info@Bdata.ca</span></a></p>
                                </div>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </MainWrapperAccordian>
        </div>
        </>
    )
}
export default JobListing;
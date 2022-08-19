import React, { useState } from "react";
import { withRouter } from "next/router";
import CountrySelect from "react-bootstrap-country-select";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import homeConstants from "../../utils/home.constants";
import { SectionWrapper } from "../../styles/styledComponents/whitePaper.style";

const DownloadWhitePaper = (props) => {
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  console.log("propssss", props.section);
  return (
    <div>
      <Header />
      <Banner data={homeConstants?.whitePapper?.banner} />
      <SectionWrapper className="container">
        <div className="row">
          <div className="col-xs-8 offset-md-2 col-md-8 offset-md-2">
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="floatingInput"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                  />
                  <label htmlFor="floatingInput">First Name</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="floatingInput"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="email"
                    id="floatingInput"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="floatingInput"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    id="floatingInput"
                    className="form-control"
                    placeholder="Company Name"
                  />
                  <label htmlFor="floatingInput">Company Name</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <CountrySelect
                    onTextChange={() => null}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                  />
                  {/* <label htmlFor="floatingInput">Job Title</label> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="floatingInput"
                    className="form-control"
                    placeholder="Job Title"
                  />
                  <label htmlFor="floatingInput">Job Title</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="floatingInput"
                    className="form-control"
                    placeholder="Industry"
                  />
                  <label htmlFor="floatingInput">Industry</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-4">
              <textarea
                id="floatingInput"
                className="form-control"
                placeholder="Comments"
              />
              <label htmlFor="floatingInput">Comments</label>
            </div>

            <p>{homeConstants?.privacyText}</p>
            <div className="form-check d-flex justify-content-left">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form6Example8"
              />
              <label className="form-check-label">
                {homeConstants?.agreeTerms}
              </label>
            </div>
            <div className="unsubscribe">{homeConstants?.unsubscribeText}</div>
            <br />
            <span className="group_1668"></span>
            <div className="btnGroup">
              <button className="btn btn-primary btn-block mb-4">Submit</button>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      section: context.query.section || "",
    },
  };
}

export default withRouter(DownloadWhitePaper);

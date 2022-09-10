import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import CountrySelect from "react-bootstrap-country-select";
import Banner from "../../components/Home/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import homeConstants from "../../utils/home.constants";
import { SectionWrapper } from "../../styles/styledComponents/whitePaper.style";

const DownloadWhitePaper = (props) => {
  const [form, setForm] = useState({});
  const [fileName, setFileName] = useState<any>({});
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  useEffect(() => {
    getWhitepaper(props);
    return () => {
      console.log("Component will be unmount");
    };
  }, []);
  const getWhitepaper = (props) => {
    if (props.section == 1)
      setFileName({
        filename: "file.pdf",
        path: "public/bdata-whitepaper.pdf",
        contentType: "application/pdf",
      });
    if (props.section == 2) {
      setFileName({
        filename: "BDATA-Innovating Security_Usecases.pptx",
        path: "public/BDATA-Innovating Security_Usecases.pptx",
        contentType: "application/pptx",
      });
    }
    if (props.section == 3) {
      setFileName({
        filename: "WhitePaper.docx",
        path: "public/WhitePaper.docx",
        contentType: "application/docx",
      });
    }
    if (props.section == 4) {
      setFileName({
        filename: "file.pdf",
        path: "public/bdata-whitepaper.pdf",
        contentType: "application/pdf",
      });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      country: selectedCountry.name,
    };
    axios
      .post("http://54.202.19.104:3000/api/email", {
        data,
        subject: "Download WhitePaper",
        attachments: [fileName],
      })
      .then((res) => {
        alert("Email send. Kindly check your mail");
        // setEmail("");
      })
      .catch((e) => console.log(e));
  };
  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div>
      <Head>
        <title>Download White Paper</title>
      </Head>
      <Header />
      <Banner />
      <SectionWrapper className="container">
        <form onSubmit={submit}>
          <div className="row">
            <div className="col-xs-8 offset-md-2 col-md-8 offset-md-2">
              <div className="row">
                <div className="col-sm-12 col-md-6 mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={onChange}
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
                      id="lastName"
                      onChange={onChange}
                      name="lastName"
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
                      id="email"
                      onChange={onChange}
                      name="email"
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
                      id="phoneNumber"
                      onChange={onChange}
                      name="phoneNumber"
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
                      id="companyName"
                      onChange={onChange}
                      name="companyName"
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
                      id="jobTitle"
                      onChange={onChange}
                      name="jobTitle"
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
                      id="industry"
                      onChange={onChange}
                      name="industry"
                      className="form-control"
                      placeholder="Industry"
                    />
                    <label htmlFor="floatingInput">Industry</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  id="comment"
                  onChange={onChange}
                  name="comment"
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
              <div className="unsubscribe">
                {homeConstants?.unsubscribeText}
              </div>
              <br />
              <span className="group_1668"></span>
              <div className="btnGroup">
                <button className="btn btn-primary btn-block mb-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

async function getServerSideProps(context) {
  return {
    props: {
      section: context.query.section || "",
    },
  };
}

export default withRouter(DownloadWhitePaper);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { SectionWrapper } from "./DownloadWhitePaper.style";
import { event } from "../../../lib/ga"

export default function DownlaodWhitePaper(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("")
  const [form, setForm] = useState({});
  const [fileName, setFileName] = useState<any>({});
  useEffect(() => {

    setMsg("Submit")
    getWhitepaper(props);
    console.log(props.data, "Asdfasdf")
    return () => {
      console.log("Component will be unmount");
    };
  }, []);
  const getWhitepaper = (props) => {
    if (props.data == "section1")
      setFileName({
        filename: "file.pdf",
        path: "public/bdata-whitepaper.pdf",
        contentType: "application/pdf",
      });
    if (props.data == "section2") {
      setFileName({
        filename: "BDATA-Innovating Security_Usecases.pptx",
        path: "public/BDATA-Innovating Security_Usecases.pptx",
        contentType: "application/pptx",
      });
    }
    if (props.data == "section3") {
      setFileName({
        filename: "WhitePaper.docx",
        path: "public/WhitePaper.docx",
        contentType: "application/docx",
      });
    }
    if (props.data == "section4") {
      setFileName({
        filename: "file.pdf",
        path: "public/bdata-whitepaper.pdf",
        contentType: "application/pdf",
      });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    setMsg("Submit")
    const data = {
      ...form
    }
    setIsLoading(true);
    event({ actions: "downloadWhitePaper", params: {
      ...form,
      fileName
    } })
    axios
      .post("http://localhost:3000/api/downloadWhitepaper", {
        data,
        subject: "Thanks for Downlaoding our Resources!",
        attachments: [fileName]
      })
      .then((res) => {
        setMsg("Email has been sent.")
        // setIsLoading(false);
        props.handleClose();
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
    <SectionWrapper>
      <h2 className="heading">Download BDATA Whitepaper</h2>
      <form className="form" onSubmit={submit}>
        <div className="row">
          <div className="">
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
                    required
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
                    required
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
                    required
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                </div>
              </div>
            </div>
            <p>
              B Data Solutions Inc. is committed to protecting and respecting
              your privacy, From time to time, we would like to contact you
              about our products and services, as well as other content that
              may be of interest to you. If you consent to us contacting you
              for this purpose, please tick below to say how you would like us
              to contact you:
            </p>
            <div className="form-check d-flex justify-content-left">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form6Example8"
                required
              />
              <label className="form-check-label" htmlFor="form6Example8">
                I agree to receive other communications from B Data Solutions
                Inc..{" "}
              </label>
            </div>
            <p>
              You can unsubscribe from these communications at any time.{" "}
            </p>
            <br />
            <div className="btnGroup">
              <button onClick={props.hanldeClose} className="btn btn-primary btn-block mb-4">
                Cancel
              </button>
              <button disabled={isLoading} type="submit" className="btn btn-primary btn-block mb-4">
                {isLoading && (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {!isLoading && <span>{msg}</span>}
              </button>
            </div>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};
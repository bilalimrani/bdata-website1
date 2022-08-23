import React, { useState, useEffect } from "react";
import axios from "axios";
import homeConstants from "../../../utils/home.constants";
import { SectionWrapper } from "./DownloadWhitePaper.style";

export default function DownlaodWhitePaper(props, onSubmit) {
  const [form, setForm] = useState({});
  const [fileName, setFileName] = useState<any>({});
  useEffect(() => {
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
    const data = {
      ...form
    }
    axios
      .post("http://localhost:3000/api/email", {
        data,
        subject: "Download WhitePaper",
        attachments: [fileName]
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
    <SectionWrapper>
      <form onSubmit={submit}>
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
            <br />
            <button className="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};
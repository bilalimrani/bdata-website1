import React, { useState, useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import resourceConstant from "../../../utils/resources.constants";
import { SectionWrapper, Button } from "./DownloadWhitePaper.style";
import { event } from "../../../lib/ga";
import { useToasts } from "react-toast-notifications";
import { sendWhitePaper } from "../../../services/whitepaper.service";
import AlertPopup from "../../Alert/Alert";

export default function DownlaodWhitePaper(props) {
  const formData: any = useRef();
  const { addToast } = useToasts();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [form, setForm] = useState<any>({});
  const [fileName, setFileName] = useState<any>("");

  useEffect(() => {
    setMsg("Submit");
    getWhitepaper();
  }, []);

  const getWhitepaper = () => {
    if (props.data == "section1") {
      setName(resourceConstant?.whitePapers[0].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/whitepapers/BIoT_Security_Technical_PLC.pdf"
      );
    }
    if (props.data == "section2") {
      setName(resourceConstant?.whitePapers[1].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/whitepapers/BIoT_Security_Technical_Airgap.pdf"
      );
    }
    if (props.data == "section3") {
      setName(resourceConstant?.whitePapers[2].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/whitepapers/BIoT_Security_Technical_IoT.pdf"
      );
    }
    if (props.data == "section4") {
      setName(resourceConstant?.whitePapers[3].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/whitepapers/BIoT_Security_Technical_MalwareHunting.pdf"
      );
    }
    if (props.data == "useCase1") {
      setName(resourceConstant?.useCases[0].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/usecases/Cyber-Security-for-Automotive.pdf"
      );
    }
    if (props.data == "useCase2") {
      setName(resourceConstant?.useCases[1].title);
      setFileName(
        "https://bdatawebsite.s3.us-west-1.amazonaws.com/usecases/Cyber-Security-for-Gold-Mine.pdf"
      );
    }
  };
  const submit = (e) => {
    e.preventDefault();
    event({
      actions: "downloadWhitePaper",
      params: {
        ...form,
      },
    });
    form.pdf = fileName;
    form.subject = props.selected;
    form.from_name = "BDATA Team";
    form.service = "service_jpjkbyk";
    form.templateId = "template_1ptwhi3";
    form.account = "-Q1ZU0qTKDXiGYV8T";
    form.addToast = addToast;
    sendWhitePaper(form);
    props.handleClose();
  };
  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  const handleClose = () => {
    props.handleClose();
  };
  return (
    <SectionWrapper>
      <div className="custom-modal-header">
        <h2 className="heading fw-bold m-0">{name}</h2>
        <button onClick={handleClose}>
          <IoIosClose />
        </button>
      </div>
      <form className="form" ref={formData} onSubmit={submit}>
        <div className="row custom-body-wrapper">
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
                <input type="hidden" id="pdf" onChange={fileName} name="pdf" />
                <span style={{ color: "red" }}>
                  {emailError && "Please enter valid email!"}
                </span>
              </div>
            </div>
            <p>
              B Data Solutions Inc. is committed to protecting and respecting
              your privacy, From time to time, we would like to contact you
              about our products and services, as well as other content that may
              be of interest to you. If you consent to us contacting you for
              this purpose, please tick below to say how you would like us to
              contact you:
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
            <p>You can unsubscribe from these communications at any time. </p>
          </div>
        </div>
        <div className="btnGroup">
          <Button
            onClick={handleClose}
            className="btn btn-primary btn-block me-4"
          >
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary btn-block"
          >
            {isLoading && (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {!isLoading && <span>{msg}</span>}
          </Button>
        </div>
      </form>
      {showAlert && (
        <AlertPopup variant="success" text="Please check your email!" />
      )}
    </SectionWrapper>
  );
}

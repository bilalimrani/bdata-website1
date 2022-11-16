import React, { useState, useEffect } from "react";
import {
  ContactWrapper,
  InfoArea,
  CalendlyWrapper,
  CalendlyWrapperInner,
} from "./ContactUs.style";
import { event } from "../../../lib/ga";
import { useToasts } from "react-toast-notifications";
import contactUsConstant from "../../../utils/contactUs.constants";
import { sendEmail } from "../../../services/whitepaper.service";
const calendly = require("public/img/calendly.png");

export default function Contact() {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    setMsg("Submit");
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg("Submit");
    event({ actions: "contactUs", params: form });
    form.subject = "BDATA Contact US";
    form.templateId = "template_mf0o2hn";
    form.service = "service_mmad8dt";
    form.account = "pdBmb_M65-xPNn8ub";
    const res: any = await sendEmail(form);

    if (res?.status && res?.text === "OK") {
      setMsg("Email has been sent.");
      addToast("Thank you for contacting with us. We will contact you soon!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
    form.templateId = "template_w7es1kj";
    sendEmail(form);
    setIsLoading(false);
  };
  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <ContactWrapper>
      <InfoArea>
        <div className="container">
          <form className="form" onSubmit={submit}>
            <div className="row">
              <div className="col-lg-8 py-3">
                <div className="row">
                  <div className="col-sm-12 col-md-6 pb-3">
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
                  <div className="col-sm-12 col-md-6 pb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={onChange}
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                      <label htmlFor="floatingInput">Last Name</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 pb-3">
                    <div className="form-floating">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={onChange}
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                      <label htmlFor="floatingInput">Email Address</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 pb-3">
                    <div className="form-floating">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        onChange={onChange}
                        placeholder="Phone Number"
                      />
                      <label htmlFor="floatingInput">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 pb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="companyName"
                        onChange={onChange}
                        name="companyname"
                        className="form-control"
                        placeholder="Company Name"
                      />
                      <label htmlFor="floatingInput">Company Name</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 pb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        onChange={onChange}
                        className="form-control"
                        placeholder="Country/Origin"
                      />
                      <label htmlFor="floatingInput">Country / Origin</label>
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

                <p>{contactUsConstant.form.text1}:</p>
                <div className="form-check d-flex justify-content-left">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form6Example8"
                    required
                  />
                  <label className="form-check-label" htmlFor="form6Example8">
                    {contactUsConstant.form.text2}{" "}
                  </label>
                </div>
                <p>{contactUsConstant.form.text3} </p>
                <div className="btnGroup mt-4">
                  <button
                    type="submit"
                    className="btn btn1 btn-primary me-sm-3"
                  >
                    {isLoading && (
                      <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                      </div>
                    )}
                    {!isLoading && <span>{msg}</span>}
                  </button>
                </div>
              </div>
              <div className="col-lg-4 py-3">
                <CalendlyWrapper>
                  <img className="img w-100" src={calendly} alt="bdata" />
                  <CalendlyWrapperInner>
                    <p className="text-center">
                      Make Appointment with Calendly
                    </p>
                  </CalendlyWrapperInner>
                  <a
                    href="https://calendly.com/syed-8/identity-theft-cyber-security?month=2022-08"
                    target="_blank"
                    className="btn btn1 btn-primary"
                  >
                    Calendly
                  </a>
                </CalendlyWrapper>
              </div>
            </div>
          </form>
        </div>
      </InfoArea>
    </ContactWrapper>
  );
}

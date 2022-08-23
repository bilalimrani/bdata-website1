import React, { useState } from "react";
import axios from "axios";
import { ContactWrapper, InfoArea, Button, CalendlyWrapper, CalendlyWrapperInner } from "./ContactUs.style";
const calendly = require("public/img/calendly.png");

export default function Contact() {
  const [form, setForm] = useState({})
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const submit = (e: any) => {
    e.preventDefault();
    const data = {
      ...form,
      country: selectedCountry.name
    }
    axios
      .post("http://localhost:3000/api/email", {
        data,
        subject: "Contact Us",
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
      [event.target.id]: event.target.value
    })
  }
  return (
    <ContactWrapper>
      <InfoArea>
      <div className="container">
        <form className="form" onSubmit={submit}>
          <div className="row">
              <div className="col-lg-8 py-3">
              <div className="row">
                <div className="col-6 py-3">
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
                <div className="col-6 py-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={onChange}
                      className="form-control"
                      placeholder="Last Name"
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>
                <div className="col-6 py-3">
                  <div className="form-floating">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={onChange}
                      name="email"
                      placeholder="Email Address"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>
                </div>
                <div className="col-6 py-3">
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
                <div className="col-6 py-3">
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
                <div className="col-6 py-3">
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
                />
                <label className="form-check-label" htmlFor="form6Example8">
                  I agree to receive other communications from B Data Solutions
                  Inc..{" "}
                </label>
              </div>
              <p>
                You can unsubscribe from these communications at any time.{" "}
              </p>
              <div className="btnGroup mt-4">
                <Button
                  type="button"
                  className="btn btn-primary me-sm-3"
                  onClick={submit}
                >
                  Submit
                </Button>
               
          </div>
              </div>
              <div className="col-lg-4 py-3">
                <CalendlyWrapper>
                <img className="img w-100" src={calendly} />
                <CalendlyWrapperInner>
                  <p className="text-center">Make Appointment with Calendly</p>
                  </CalendlyWrapperInner>
                <Button type="button" className="btn btn-primary" onClick={submit}>
                  Calendly
                </Button>
                </CalendlyWrapper>
             
              </div>
            </div>
        </form>
        </div>
      </InfoArea>

    </ContactWrapper>
  );
}
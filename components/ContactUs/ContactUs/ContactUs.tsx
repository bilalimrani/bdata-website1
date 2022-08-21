import React, { useState } from "react";
import axios from "axios";
import CountrySelect from "react-bootstrap-country-select";
import { ContactWrapper, InfoArea } from "./ContactUs.style";

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
        <form className="form" onSubmit={submit}>
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
                  name="lastName"
                  onChange={onChange}
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
                  className="form-control"
                  onChange={onChange}
                  name="email"
                  placeholder="Email Address"
                />
                <label htmlFor="floatingInput">Email Address</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mb-4">
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
          </div>
          <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
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
            B Data Solutions Inc. is committed to protecting and respecting your
            privacy, From time to time, we would like to contact you about our
            products and services, as well as other content that may be of
            interest to you. If you consent to us contacting you for this purpose,
            please tick below to say how you would like us to contact you:
          </p>
          <div className="form-check d-flex justify-content-left">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form6Example8"
            />
            <label className="form-check-label" htmlFor="form6Example8">
              I agree to receive other communications from B Data Solutions Inc..{" "}
            </label>
          </div>
          <div className="unsubscribe">
            You can unsubscribe from these communications at any time.{" "}
          </div>
          <br />
          <div className="btnGroup">
            <button className="btn btn-primary btn-block mb-4" onClick={submit}>
              Submit
            </button>
            <button className="btn btn-primary btn-block mb-4">Calendly</button>
          </div>
        </form>
      </InfoArea>

    </ContactWrapper>
  );
}

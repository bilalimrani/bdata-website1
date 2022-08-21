import React, { useState } from "react";
import axios from "axios";
import { ContactWrapper } from "./ContactUs.style.js";

export default function Contact() {
  const [form, setForm] = useState({});
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/email", {
        formData: form,
        subject: "Download WhitePaper",
        attachments: [
          {
            filename: "file.pdf",
            path: "public/bdata-whitepaper.pdf",
            contentType: "application/pdf",
          },
        ],
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
    <ContactWrapper>
      <form className="form" onSubmit={submit}>
        <div className="heading">Download Whitepaper</div>
        <div className="row mb-4">
          <div className="col">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                className="form-control"
                placeholder="Email Address"
              />
              <label htmlFor="floatingInput">Email Address</label>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onChange={onChange}
                className="form-control"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={onChange}
                className="form-control"
                placeholder="Company Name"
              />
              <label htmlFor="floatingInput">Company Name</label>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="text"
                id="Country"
                className="form-control"
                name="country"
                onChange={onChange}
                placeholder="Country/Origin"
              />
              <label htmlFor="floatingInput">Country / Origin</label>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                onChange={onChange}
                className="form-control"
                placeholder="Job Title"
              />
              <label htmlFor="floatingInput">Job Title</label>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="text"
                id="industry"
                name="industry"
                onChange={onChange}
                className="form-control"
                placeholder="Industry"
              />
              <label htmlFor="floatingInput">Industry</label>
            </div>
          </div>

          <div className="col-md-12 py-3">
            <div className="form-floating">
              <textarea
                id="comment"
                className="form-control"
                onChange={onChange}
                name="comment"
                placeholder="Comments"
              />
              <label htmlFor="floatingInput">Comments</label>
            </div>
          </div>
        </div>
        <p>
          B Data Solutions Inc. is committed to protecting and respecting your
          privacy, From time to time, we would like to contact you about our
          products and services, as well as other content that may be of
          interest to you. If you consent to us contacting you for this purpose,
          please tick below to say how you would like us to contact you:
        </p>
        <div className="form-check d-flex justify-content-left">
          <input className="form-check-input me-2" type="checkbox" required />
          <label className="form-check-label" htmlFor="form6Example8">
            I agree to receive other communications from B Data Solutions Inc..{" "}
          </label>
        </div>
        <div className="unsubscribe">
          You can unsubscribe from these communications at any time.{" "}
        </div>
        <br />
        <div className="btnGroup">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Download
          </button>
          <div className="group_1668"></div>
        </div>
      </form>
    </ContactWrapper>
  );
}

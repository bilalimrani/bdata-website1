import React from "react";
import { ContactWrapper, Button } from "./ContactUs.style";

export default function Contact() {
  const submit = async (e) => {
    e.preventDefault();
    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "bimrani816@gmail.com" }),
    });
  };

  return (
    <ContactWrapper>
      <div className="custom-container">
        <form className="form">
          <div className="row">
            <div className="col-sm-12 col-md-6 my-2">
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
            <div className="col-sm-12 col-md-6 my-2">
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

            <div className="col-sm-12 col-md-6 my-2">
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
            <div className="col-sm-12 col-md-6 my-2">
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
            <div className="col-sm-12 col-md-6 my-2">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingInput"
                  className="form-control"
                  placeholder="Company Name"
                />
                <label htmlFor="floatingInput">Company Name</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 my-2">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingInput"
                  className="form-control"
                  placeholder="Country/Origin"
                />
                <label htmlFor="floatingInput">Country / Origin</label>
              </div>
            </div>
          </div>
          <div className="col-12 my-2">
            <div className="form-floating">
              <textarea
                id="floatingInput"
                className="form-control"
                placeholder="Comments"
              />
              <label htmlFor="floatingInput">Comments</label>
            </div>
          </div>
          <div className="col-12 my-2">
            <p>
              B Data Solutions Inc. is committed to protecting and respecting
              your privacy, From time to time, we would like to contact you
              about our products and services, as well as other content that may
              be of interest to you. If you consent to us contacting you for
              this purpose, please tick below to say how you would like us to
              contact you:
            </p>
          </div>
          <div className="form-check d-flex justify-content-left align-items-start">
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
          <p className="mt-1 mb-2">
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
            <Button type="button" className="btn btn-primary" onClick={submit}>
              Calendly
            </Button>
          </div>
        </form>
      </div>
    </ContactWrapper>
  );
}

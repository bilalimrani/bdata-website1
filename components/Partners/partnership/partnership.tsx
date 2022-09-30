import React from "react";
import {
  SectionWrapper,
  Button,
  CalendlyWrapper,
  CalendlyWrapperInner,
} from "./partnership.style.js";
import { IoIosClose } from "react-icons/io";
const calendly = require("public/img/calendly.png");

export default function Partnership({ handleClose }) {
  return (
    <>
      <SectionWrapper>
        <div className="custom-modal-header">
          <h2 className="heading fw-bold m-0">Apply for Partnership Program</h2>
          <button onClick={handleClose}>
            <IoIosClose />
          </button>
        </div>
        <form className="form">
          <div className="custom-body-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    // onChange={onChange}
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
                    // onChange={onChange}
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="email"
                    id="email"
                    // onChange={onChange}
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div className="form-floating">
                  <input
                    type="number"
                    id="phone-number"
                    // onChange={onChange}
                    name="email"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
              </div>
              {/* <div className="col-sm-12 col-md-6 mb-4">
                <CalendlyWrapper>
                  <img className="img w-100" src={calendly} alt="bdata" />
                  <CalendlyWrapperInner>
                    <p className="text-center">
                      Make Appointment with Calendly
                    </p>
                  </CalendlyWrapperInner>
                  <Button
                    // href="https://calendly.com/syed-8/identity-theft-cyber-security?month=2022-08"
                    target="_blank"
                    className="btn btn1 btn-primary"
                  >
                    Calendly
                  </Button>
                </CalendlyWrapper>
              </div> */}
              <div className="col-sm-12 col-md-6 mb-4">
                <p>
                  {" "}
                  BDATA Solutions Inc. is committed to protecting and respecting
                  your privacy, From time to time, we would like to contact you
                  about our products and services, as well as other content that
                  may be of interest to you. If you consent to us contacting you
                  for this purpose, please tick below to say how you would like
                  us to contact you:
                </p>
              </div>
            </div>

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
          <div className="btnGroup">
            <Button
              onClick={handleClose}
              className="btn btn-primary btn-block me-4"
            >
              Cancel
            </Button>
            <Button
              // disabled={isLoading}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Apply
            </Button>
          </div>
        </form>
      </SectionWrapper>
    </>
  );
}

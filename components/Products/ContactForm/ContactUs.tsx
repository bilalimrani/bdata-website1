import React from "react";
import axios from "axios";
import { ContactWrapper, Button } from "./ContactUs.style";

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/email", {
        email: "bimrani816@gmail.com",
      })
      .then((res) => {
        alert("Send Mail To You");
        // setEmail("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <ContactWrapper>      
      <form >
        <div className="custom-container">
      <div className="heading">Download Whitepaper</div>
        <div className="row ">
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
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
          <div className="col-md-6 py-3">
            <div className="form-floating">
              <input
                type="text"
                id="floatingInput"
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
                id="floatingInput"
                className="form-control"
                placeholder="Industry"
              />
              <label htmlFor="floatingInput">Industry</label>
            </div>
          </div>
       
        <div className="col-md-12 py-3">
          <div className="form-floating">
          <textarea
            id="floatingInput"
            className="form-control"
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
          <Button className="btn btn-light" onClick={submit}>Download</Button>
        </div>
        </div>
      </form>
    
    </ContactWrapper>
  );
}

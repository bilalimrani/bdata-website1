import React from "react";
import Image from "next/image";
import { ValueWrapper } from "../../../styles/styledComponents/Team.style.js";
const icon1 = require("public/img/founder.svg");
const icon2 = require("public/img/cofounder.svg");
const icon3 = require("public/img/dirctor-cyberSecurity.svg");
const icon4 = require("public/img/automotion.svg");
const icon5 = require("public/img/accounting.svg");
const icon6 = require("public/img/vp-finance.svg");
const linkdin = require("public/img/linkdin.svg");
const dummy = require("public/img/dummy.svg");



export default function Guide() {
  return (
    <ValueWrapper>
      <div className="container">
      <h2 className="fw-bold text-center m-0">Our Team</h2>
        <div className="row my-3 mb-5">
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon1} alt="Founder Image" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Syed Zeeshan Bari </h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon2} alt="Co-Founder" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Owen Wang</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Co-founder</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
           
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon3} alt="Director" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Pratik Patel</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Director Cyber Security</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3"> 
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon4} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Thomas Lichtenberger</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Automation Adviser</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
           
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon5} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Sijal Bari</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Accounting Associate</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon6} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Jayden Frazier</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />VP of Finance</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3"> 
            <div className="custom-card">
              <div className="imageCenter">
                <img src={dummy} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Mino Mehta</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Business Development Adviser</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
           
            <div className="custom-card">
              <div className="imageCenter">
                <img src={dummy} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Carlo Cristofari</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Growth Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img src={dummy} alt="Automation" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Nadia Diakun</h5>
                <p className="card-text text-center"><img src={linkdin} alt="linkdin link" className="linkdin-link" />Thibault, ABD (PHD)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ValueWrapper>
  );
}

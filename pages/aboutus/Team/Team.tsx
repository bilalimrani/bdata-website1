import React from "react";
import { ValueWrapper } from "../../../styles/styledComponents/Team.style.js";
import aboutUsConstant from "../../../utils/aboutUs.constants";
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
        <h2 className="fw-bold text-center m-0">
          {aboutUsConstant.team.title}
        </h2>
        <div className="row my-3 mb-5">
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={icon1}
                  alt="Founder Image"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Syed Zeeshan Bari </h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/syedbari/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Founder and CEO
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={icon2}
                  alt="Co-Founder"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Owen Wang</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/ya-ou-owen-wang-11959b39/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Co-founder
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img src={icon3} alt="Director" className="custom-round-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Pratik Patil</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/pratik-patil-820286144/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Product Architect
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={icon4}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Thomas Lichtenberger</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/thomas-lichtenberger/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Automation Adviser
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={icon5}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Sijal Bari</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/sijal-bari/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Accounting Associate
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={icon6}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Brandon Lee</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/kokhohbrandonlee/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  General Manager - Asia Pacific
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={dummy}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Minoo Mehta</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/minoomehta/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Sales Adviser
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={dummy}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Carlo Cristofari</h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/carlocristofari/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Growth Advisor
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 py-3">
            <div className="custom-card">
              <div className="imageCenter">
                <img
                  src={dummy}
                  alt="Automation"
                  className="custom-round-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Nadia Diakun-Thibault, ABD (PhD), MPA, BSc
                </h5>
                <p className="card-text text-center">
                  <a
                    href="https://www.linkedin.com/in/nadia-diakun-thibault-abd-phd-mpa-bsc-%F0%9F%87%BA%F0%9F%87%A6-79b35b126/"
                    target="_blank"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin link"
                      className="linkdin-link"
                    />
                  </a>
                  Healthcare Adviser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ValueWrapper>
  );
}

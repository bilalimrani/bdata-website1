import React from "react";
import Image from "next/image";
import { ValueWrapper } from "../../../styles/styledComponents/Team.style.js";
const icon1 = require("public/img/bari.svg");
const icon2 = require("public/img/owen.svg");
const icon3 = require("public/img/pratik.svg");
const icon4 = require("public/img/Member-img-4.png");
const icon5 = require("public/img/sajal.svg");
const icon6 = require("public/img/Member-img-6.png");

export default function Guide() {
  return (
    <ValueWrapper>
      <div className="container">
        <h1 className="text-center main-heading">Our Team</h1>
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon1}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Syed Zeeshan Bari </h5>
                <p className="card-text text-center">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon2}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Owen Wang</h5>
                <p className="card-text text-center">Co-founder</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon3}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Pratik Patel</h5>
                <p className="card-text text-center">Director Cyber Security</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon4}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Thomas Lichtenberger</h5>
                <p className="card-text text-center">Automation Adviser</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon5}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Sijal Bari </h5>
                <p className="card-text text-center">Accounting Associate</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="imageCenter">
                <Image
                  width="100"
                  height="100"
                  src={icon6}
                  className="card-image-center"
                  alt="Hollywood Sign on The Hill"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Jayden Frazier</h5>
                <p className="card-text text-center">VP of Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ValueWrapper>
  );
}

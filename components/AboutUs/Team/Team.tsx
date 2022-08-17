import React from "react";
import Image from 'next/image'
import { ValueWrapper } from "./Team.style";
const icon1 = require("public/img/Member-img-1.png");
const icon2 = require("public/img/Member-img-3.png");
const icon3 = require("public/img/Member-img-5.png");
const icon4 = require("public/img/Member-img-2.png");
const icon5 = require("public/img/Member-img-4.png");
const icon6 = require("public/img/Member-img-6.png");

export default function Guide() {
  return <ValueWrapper className="container">
    <h1 className="text-center main-heading">Our Team</h1>
    <br />
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon1} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Syed Zeeshan Bari </h5>
            <p className="card-text text-center">
              Founder and CEO
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon2} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Owen Wang</h5>
            <p className="card-text text-center">
              Co-founder
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon3} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Pratik Patel</h5>
            <p className="card-text text-center">
              Director Cyber Security
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon4} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Thomas Lichtenberger</h5>
            <p className="card-text text-center">
              Automation Adviser
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon5} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Sijal Bari  </h5>
            <p className="card-text text-center">
              Accounting Associate
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="imageCenter">
            <img src={icon6} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Jayden Frazier</h5>
            <p className="card-text text-center">
              VP of Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  </ValueWrapper>;
}

import React from "react";
import { ProductWrapper } from "./BiotProducts.style";
const icon1 = require("public/img/image-26.png");
const icon2 = require("public/img/image-62.png");
const icon3 = require("public/img/image-63.png");
const icon4 = require("public/img/image-64.png");

export default function BiotProduct() {
  return (
    <ProductWrapper>
      <div className="container">
        <div className="row custom-padding-top">
          <div className="col-lg-6 custom-padding">
          <div className="heading">BDATA BIOT Product</div>
          <p>Cyber-attack vulnerabilities related to Industrial Control System (ICS) or operational technology (OT) as well as.</p>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
        </ul>
          </div>
          <div className="col-lg-6 custom-padding text-end">
          <img src={icon1} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          </div>
          <div className="row">
          
          <div className="col-lg-6 custom-padding order-lg-2">
          <div className="heading">BDATA BIOT Product</div>
          <p>Cyber-attack vulnerabilities related to Industrial Control System (ICS) or operational technology (OT) as well as.</p>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
        </ul>
          </div>
          <div className="col-lg-6 custom-padding order-lg-1">
          <img src={icon2} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          </div>
          <div className="row">
          <div className="col-lg-6 custom-padding">
          <div className="heading">BDATA BIOT Product</div>
          <p>Cyber-attack vulnerabilities related to Industrial Control System (ICS) or operational technology (OT) as well as.</p>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
        </ul>
          </div>
          <div className="col-lg-6 custom-padding text-end">
          <img src={icon3} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          </div>
          <div className="row">
          <div className="col-lg-6 custom-padding order-lg-2">
          <div className="heading">BDATA BIOT Product</div>
        <p>Cyber-attack vulnerabilities related to Industrial Control System (ICS) or operational technology (OT) as well as.</p>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
          <li>Lorem Ipsum is simply dummy text of the printing.</li>
        </ul>
          </div>
        <div className="col-lg-6 custom-padding order-lg-1">
          <img src={icon4} className="card-image-center" alt="Hollywood Sign on The Hill" />
          </div>
          
        </div>
      </div>
    </ProductWrapper>
  );
}
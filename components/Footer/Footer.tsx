/*eslint-disable*/
import React from "react";
import { FooterContainer } from "./Footer.style";
import Image from "next/image";
const whiteLogo = require("public/img/footerlogo.svg");

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="logoWrapper">
              <Image src={whiteLogo} width={150} height={48} />
            </div>
            <div className="address-wrapper py-3">
              <p>BDATA</p>
              <p>
                107 Agro St Waterdown <br /> Ontario , Canada <br />
                L8B 1Y2
              </p>
              <a href="tel:1-647-920-1701" target="_self" title="1-647-920-1701"  className="bdata-links-p"><span>1-647-920-1701</span></a>
              <a href="mailto:info@Bdata.ca" target="_self" title="info@Bdata.ca"  className="bdata-links-p"><span>info@Bdata.ca</span></a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <h5 className="fw-bold m-0 mb-2 text-white">Main Pages</h5>
                <ul className="footer-links-ul">
                  <li>
                    <a href="/" className="footer-links">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/products" className="footer-links">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/press" className="footer-links">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus" className="footer-links">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" className="footer-links">
                      Contact Us
                    </a>
                  </li>
                 
                  {/* <li>
                    <a href="/industries" className="footer-links">
                      Industries
                    </a>
                  </li> */}
                 

                </ul>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <h5 className="fw-bold m-0 mb-2 text-white">Company</h5>
                <ul className="footer-links-ul">
                  {/* <li>
                    <a href="#" className="footer-links">
                      About Us
                    </a>
                  </li> */}
                  <li>
                    <a href="#" className="footer-links">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <h5 className="fw-bold m-0 mb-2 text-white">More</h5>
                <ul className="footer-links-ul">
                  <li>
                    <a href="/resources" className="footer-links">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="address-wrapper1 row">
          <div className="col-12 py-2 py-lg-3 col-lg-10 text-center-responsivness">
            <p>
              © Copyright {new Date().getFullYear()}, BData. All Rights
              Reserved.
            </p>
          </div>
          <div className="col-12 py-2 py-lg-3 col-lg-2 text-center-responsivness">
            <div className="socoalMediaLinks">
              <a href="#" className="custom-round-img twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="custom-round-img facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/bdatasolutions/mycompany/"
                className="custom-round-img linkdin"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

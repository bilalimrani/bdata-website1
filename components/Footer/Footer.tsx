/*eslint-disable*/
import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { FooterContainer } from "./Footer.style";
import Image from "next/image";
const whiteLogo = require("public/img/footerlogo.svg");

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="logoWrapper">
              <Image src={whiteLogo} width={150} height={48} />
            </div>
            <div className="address-wrapper py-3">
              <div className="bdata-location text-svg-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  className="svg1"
                >
                  <path
                    d="M4.08304 0.482759L0.81124 2.53448C0.690062 2.61494 0.609277 2.73563 0.609277 2.89655C0.609277 3.05747 0.690062 3.17816 0.81124 3.25862L4.20422 5.22989C4.3254 5.31035 4.52736 5.31035 4.64854 5.22989L6.74896 3.86207C6.95092 3.74138 6.99131 3.45977 6.87014 3.25862C6.74896 3.05747 6.46621 3.01724 6.26425 3.13793L4.40618 4.34483L1.86145 2.85632L4.52736 1.16667C5.17364 0.764368 5.9411 0.724138 6.58739 1.04598L9.61683 2.61494L4.48697 6.11494L2.6693 5.18966C2.1038 4.86782 1.41713 4.90805 0.851633 5.22989C0.286136 5.59195 -0.0370055 6.15517 0.00338713 6.79885V10.7012C0.00338713 10.8621 0.0841724 11.023 0.245743 11.0632L5.9815 13.9598C6.06228 14 6.10268 14 6.18346 14C6.26425 14 6.34503 13.9598 6.42582 13.9195L11.798 10.5805C11.9192 10.5 12 10.3793 12 10.2184V3.94253C12 3.78161 11.9192 3.66092 11.798 3.58046C11.6769 3.5 11.5153 3.5 11.3537 3.58046L5.81993 7.08046C5.61796 7.20115 5.65836 7.56322 5.65836 7.56322V10.2989C5.65836 10.7414 6.5066 10.7012 6.5066 10.2989V7.64368L11.1921 4.7069V9.97701L6.26425 13.0747L0.932418 10.4195V6.75862C0.932418 6.39655 1.09399 6.11494 1.37674 5.91379C1.65949 5.75287 2.02302 5.71264 2.34616 5.87356L4.36579 6.91954C4.48697 7 4.68893 7 4.81011 6.87931L10.7074 2.85632C10.8286 2.77586 10.9094 2.61494 10.9094 2.49425C10.9094 2.33333 10.8286 2.21264 10.667 2.13218L6.99131 0.241379C6.62778 0.0804598 6.18346 0 5.73914 0C5.17364 0 4.60815 0.16092 4.08304 0.482759Z"
                    fill="white"
                  />
                </svg>
                <p>BDATA Solutions Inc</p>
              </div>
              <div className="bdata-location address1 py-1">
                <IoLocationOutline />
                <p>
                  107 Agro St Waterdown <br /> Ontario , Canada <br />
                  L8B 1Y2
                </p>
              </div>

              <div className="phone">
                <IoCallOutline />
                <a
                  href="tel:1-647-920-1701"
                  target="_self"
                  title="1-647-920-1701"
                  className="bdata-links-p phone1"
                >
                  <span>1-647-920-1701</span>
                </a>
              </div>
              <div className="email">
                <IoMailOutline />
                <a
                  href="mailto:info@Bdata.ca"
                  target="_self"
                  title="info@Bdata.ca"
                  className="bdata-links-p email1"
                >
                  <span>info@Bdata.ca</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-lg-7 col-sm-6 col-12">
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
              {/* <div className="col-lg-4 col-sm-6 col-12">
                <h5 className="fw-bold m-0 mb-2 text-white">Company</h5>
                <ul className="footer-links-ul">
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
              </div> */}
              <div className="col-lg-5 col-sm-6 col-12">
                <h5 className="fw-bold m-0 mb-2 text-white">More</h5>
                <ul className="footer-links-ul">
                  <li>
                    <a href="/resources" className="footer-links">
                      Documentation
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="footer-links">
                      License
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="address-wrapper1 row">
          <div className="col-12 py-2 py-lg-3 col-lg-10 text-center-responsivness text1">
            <p>
              © Copyright {new Date().getFullYear()}, BDATA Solutions Inc. All
              Rights Reserved.
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

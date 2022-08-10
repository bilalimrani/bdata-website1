import React, { useState } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
// core components
import Logo from "public/img/Newlogo.png";
import { NavContainer ,NavbarLogo } from "./Header.style";

export default function Header(props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
        <NavContainer className="container-fluid">
          <NavbarLogo>
            <a className="navbar-brand" href="#">
              <Image src={Logo} width={150} height={48} />
            </a>
            <button className="navbar-toggler" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          </NavbarLogo>
          
          <div className="">
          <div className={(showNav ? "show" : "") + " collapse navbar-collapse"}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Press
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Industries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          </div>
        </NavContainer>
    </nav>
  );
}

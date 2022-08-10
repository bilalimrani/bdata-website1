import React, { useState } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
// core components
import Logo from "public/img/logo.png";
import { NavContainer } from "./Header.style";

export default function Header(props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <NavContainer className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">
            <Image src={Logo} width={30} height={30} />
          </a>
        </div>
        <button className="navbar-toggler" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={(showNav ? "show" : "") + " collapse navbar-collapse"}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </NavContainer>
    </nav>
  );
}

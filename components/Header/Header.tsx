import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "public/img/logo.svg";
import links from "utils/navbar.constants";
import { NavContainer, NavbarLogo } from "./Header.style";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <NavContainer className="container-fluid">
        <NavbarLogo>
          <Link href="/">
            <a className="navbar-brand" href="/">
              <Image src={Logo} width={150} height={48} />
            </a>
          </Link>
          <button className="navbar-toggler" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </NavbarLogo>

        <div className="">
          <div
            className={(showNav ? "show" : "") + " collapse navbar-collapse"}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links?.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link href={item?.link}>
                      <a
                        className={`${
                          router.pathname == item.link ? "active" : ""
                        } nav-link`}
                      >
                        {item?.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </NavContainer>
    </nav>
  );
}

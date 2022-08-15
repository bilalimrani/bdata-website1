import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import links from "../../utils/navbar.constants";
import { NavContainer, NavbarLogo, NavbarWrapper } from "./Header.style";
const whiteLogo = require("public/img/footerlogo.svg");
const Logo = require("public/img/logo.svg");

export default function Header() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const [isIncreaseHeight, setIsIncreaseHeight] = useState(false);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", headerColorChange);

  //   return () => {
  //     window.removeEventListener("scroll", headerColorChange);
  //   };
  // });

  // const headerColorChange = () => {
  //   const windowsScrollTop = window.pageYOffset;
  //   if (windowsScrollTop > 100) {
  //     setIsIncreaseHeight(true);
  //   } else {
  //     setIsIncreaseHeight(false);
  //   }
  // };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <NavbarWrapper isIncreaseHeight={isIncreaseHeight}>
      <nav className="navbar navbar-expand-lg py-3">
        <NavContainer
          className="container-fluid"
          isIncreaseHeight={isIncreaseHeight}
        >
          <NavbarLogo>
            <Link href="/">
              <a className="navbar-brand" href="/">
                <Image
                  src={!isIncreaseHeight ? whiteLogo : Logo}
                  width={150}
                  height={48}
                />
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
    </NavbarWrapper>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import links from "../../utils/navbar.constants";
import { NavContainer, NavbarLogo, NavbarWrapper } from "./Header.style";
// import { route } from "next/dist/next-server/server/router";
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
        <NavContainer className="container" isIncreaseHeight={isIncreaseHeight}>
          <NavbarLogo>
            <Link href="/">
              <a className="navbar-brand" href="/">
                <Image
                  src={!isIncreaseHeight ? whiteLogo : Logo}
                  width={150}
                  height={48}
                  alt="bdata"
                />
              </a>
            </Link>
            <button className="navbar-toggler" onClick={toggleNav}>
              <i className="fa fa-bars"></i>
              {/* <span className="navbar-toggler-icon"></span> */}
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
                        {item?.type === "outer" ? (
                          <a target="_blank" className="nav-link">
                            {item?.name}
                          </a>
                        ) : (
                          <a
                            className={`${
                              router.pathname == item.link ||
                              router.pathname == item.subLink ||
                              router.pathname == item.subLink1
                                ? "active"
                                : ""
                            } nav-link`}
                          >
                            {item?.name}
                          </a>
                        )}
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

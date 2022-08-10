import React from "react";
import Link from "next/link";
import Image from "next/image";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "styles/jss/nextjs-material-kit/components/headerStyle";
import Logo from "public/img/logo.png";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    // if (props.changeColorOnScroll) {
    //   window.addEventListener("scroll", headerColorChange);
    // }
    // return function cleanup() {
    //   if (props.changeColorOnScroll) {
    //     window.removeEventListener("scroll", headerColorChange);
    //   }
    // };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const headerColorChange = () => {
  //   const { color, changeColorOnScroll } = props;
  //   const windowsScrollTop = window.pageYOffset;
  //   if (windowsScrollTop > changeColorOnScroll.height) {
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.remove(classes[color]);
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.add(classes[changeColorOnScroll.color]);
  //   } else {
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.add(classes[color]);
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.remove(classes[changeColorOnScroll.color]);
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src={Logo} alt="Logo" width={40} height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

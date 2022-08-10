/*eslint-disable*/
import React from "react";
import {FooterContainer} from './Footer.style';
import Image from "next/image";
import Logo from "public/img/FooterLogo.png";

export default function Footer() {
  return (
  <FooterContainer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="logoWrapper">
            <Image src={Logo} width={150} height={48} />
          </div>
          <div className="socoalMediaLinks">
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="col-sm-6">2</div>

      </div>
    </div>
  </FooterContainer>
  );
}

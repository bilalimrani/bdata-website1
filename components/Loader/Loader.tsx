import React from "react";
import Image from "next/image";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoaderWrapper from "./Loader.style";

const Logo = require("../../public/img/animatedLoader.gif");

const LogoLoader = () => {
  return (
    <LoaderWrapper>
      <Image src={Logo} width={100} height={100} alt="bdata" />
    </LoaderWrapper>
  );
};

export default LogoLoader;

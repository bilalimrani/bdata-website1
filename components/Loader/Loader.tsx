import React from "react";
import Image from "next/image";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Logo from "public/img/animatedLoader.gif";
import LoaderWrapper from "./Loader.style";

const LogoLoader = () => {
  return (
    <LoaderWrapper>
      <Image src={Logo} width={100} height={100} />
    </LoaderWrapper>
  );
};

export default LogoLoader;

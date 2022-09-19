import React from "react";
import Image from "next/image";
import Logo from "public/img/loader.png";
import LoaderWrapper from "./Loader.style";

const LogoLoader = () => {
  return (
    <LoaderWrapper>
      <Image src={Logo} width={50} height={50} />
    </LoaderWrapper>
  );
};

export default LogoLoader;

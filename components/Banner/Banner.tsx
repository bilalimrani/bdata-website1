import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { BannerWrapper } from "./Banner.style";


export default function Banner() {
  return (  
    <BannerWrapper>
        <div className="container">
            <div className="banner-content-wrapper">
                <h2 className="fw-bold">Zero Trust Technology for Network Security</h2>
                <button className="custom-btn-white">Start free trial</button>
            </div>
        </div>
    </BannerWrapper>
  );
}

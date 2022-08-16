

import React from "react";
import {PaperWraper , CardWrapper, Button,SectionPadding }  from "./Videos.style";
import Image from "next/image";

const PaperImg = require("public/img/paperimg.svg");

export default function Videos() {
  return (
    <PaperWraper>
         <SectionPadding>
     <h2 className="text-center m-0 fw-bold">Vidoes</h2>
     </SectionPadding>
     <div className="row">
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
        <div className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/8_cAO1Es_Jk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="m-0 my-4 fw-bold">Internet of things BIOT</h4>
          <Button>Watch Now</Button>
            </CardWrapper>
        </div>
     </div>
         
    </PaperWraper>
  );
}


    
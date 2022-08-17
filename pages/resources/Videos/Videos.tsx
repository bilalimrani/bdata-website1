import React from "react";
import {
  PaperWraper,
  CardWrapper,
  Button,
  SectionPadding,
} from "./Videos.style";

const data = [
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
  {
    src: "https://www.youtube.com/embed/8_cAO1Es_Jk",
    title: "Internet of things BIOT",
  },
];

export default function Videos() {
  return (
    <PaperWraper>
      <SectionPadding>
        <h2 className="text-center m-0 fw-bold">Vidoes</h2>
      </SectionPadding>
      <div className="row">
        {data?.map((item, index) => (
          <div key={index} className="col-sm-6 col-lg-4 custom-padding">
            <CardWrapper>
              <iframe
                width="100%"
                height="300"
                src={item.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <h4 className="m-0 my-4 fw-bold">{item.title}</h4>
              <Button>Watch Now</Button>
            </CardWrapper>
          </div>
        ))}
      </div>
    </PaperWraper>
  );
}

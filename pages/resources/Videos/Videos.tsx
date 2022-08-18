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
      <h3 className="text-center m-0  fw-bold">Videos</h3>
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
              ></iframe>
              <h4 className="m-0 my-4 fw-bold">{item.title}</h4>
              <Button type="button" className="btn btn-primary">
              Watch Now
              </Button>
            </CardWrapper>
          </div>
        ))}
      </div>
    </PaperWraper>
  );
}

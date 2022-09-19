import { useState } from "react";
import { HeaderWrapper ,MainWrapperAccordian } from "./Accordian.style";
import Image from 'next/image';
const favicon = require("public/img/favicon.png");

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div >
        <MainWrapperAccordian >
        <HeaderWrapper>
        <div onClick={toggle} className="header-wrapper-inner">
            <div className="left-align-text">
             <Image
            src={favicon}
            alt="Picture of the author"
            width="25px"
            height="30px"
            className="imageIcons"
          />
            <h2>{props.title}</h2>
            </div>
            <div className="timer-counter">
                <p>{props.time}</p>
            </div>
        </div>
      </HeaderWrapper>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      </MainWrapperAccordian>
    </div>
  );
}

import React from "react";
import { VisionWrapper } from "./Vision.style";

export default function Guide() {
  return <VisionWrapper className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="image"></div>
      </div>
      <div className="col-sm-6">
        <div className="mission">
          <h2 className="fw-bold heading">
            Our Mission
          </h2>
          <p>We secure business and industries from Cyber Attacks</p>
        </div>
        <div className="vision">
          <h2 className="fw-bold heading">
            Our Vision
          </h2>
          <p>We secure business and industries from Cyber Attacks</p>
        </div>
      </div>
    </div></VisionWrapper>;
}

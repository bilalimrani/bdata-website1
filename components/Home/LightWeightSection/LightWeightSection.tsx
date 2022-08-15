import React from "react";
import Image from "next/image";
import { LightWeightSectionWrapper } from "./LightWeightSection.style";
const Frame78 = require("public/img/frame78.png");

export default function LightWeightSection() {
  return (
    <LightWeightSectionWrapper className="container">
      {/* section one */}
      <div>
        <h2 className="text-center m-0 fw-bold">
          Lightweight Multilayer Cyber Security
        </h2>
        <p>
          Achieving cyber resilience to meet cyber compliance requirements is a
          complex, time- consuming and expensive exercise for any company.
          Hedgehog security technology is a ready to use cyber security solution
          which effectively mitigate the risk of cyber-attack and help companies
          to achieve cyber resilience and compliance with up to 80% cost saving.
        </p>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
      {/* section two */}
      <div className="row">
        <div className="col-md-4">
          <Image src={Frame78} width={385} height={500} />
        </div>
        <div className="col-md-8">
          <h2 className="m-0 fw-bold">Lightweight Multilayer Cyber Security</h2>
          <p>
            Achieving cyber resilience to meet cyber compliance requirements is
            a complex, time- consuming and expensive exercise for any company.
            Hedgehog security technology is a ready to use cyber security
            solution which effectively mitigate the risk of cyber-attack and
            help companies to achieve cyber resilience and compliance with up to
            80% cost saving.
          </p>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
      {/* section three */}
      <div className="row">
        <div className="col-md-8">
          <h2 className="m-0 fw-bold">Lightweight Multilayer Cyber Security</h2>
          <p>
            Achieving cyber resilience to meet cyber compliance requirements is
            a complex, time- consuming and expensive exercise for any company.
            Hedgehog security technology is a ready to use cyber security
            solution which effectively mitigate the risk of cyber-attack and
            help companies to achieve cyber resilience and compliance with up to
            80% cost saving.
          </p>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
        <div className="col-md-4">
          <Image src={Frame78} width={385} height={500} />
        </div>
      </div>
    </LightWeightSectionWrapper>
  );
}

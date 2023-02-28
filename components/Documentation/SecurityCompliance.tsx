import styled from "styled-components";
const securityComplianceImg = require("public/img/securityCompliance.jpg");

const H5 = styled.h5`
  font-weight: bold;
  margin-bottom: 0px;
`;

export default function SecurityCompliance() {
  return (
    <div>
      <div>
        <H5>- NIST SP 800-82</H5>
        <p>
          This guideline provides best practices for the secure
          design,configuration, and maintenance of industrial control systems
        </p>
      </div>

      <div>
        <H5>- IEC 62443:</H5>
        <p>
          This is a family of standards that provides guidelines for the secure
          design, implementation, and maintenance of industrial automation and
          control systems.
        </p>
      </div>

      <div>
        <H5>- ISO/IEC 27001:</H5>
        <p>
          This is an international standard that provides guidelines for the
          implementation of an information security management system (ISMS).
        </p>
      </div>

      <div>
        <H5>- Cybersecurity Information Sharing Act (CISA):</H5>
        <p>
          A law passed by the US Congress that allows the sharing of
          cybersecurity threat intelligence between the private sector and the
          government.
        </p>
      </div>

      <div>
        <H5>- NERC CIP (Critical Infrastructure Protection):</H5>
        <p>
          This set of standards from the North American Electric Reliability
          Corporation (NERC) is focused on protecting the bulk electric system
          in North America.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={securityComplianceImg} alt="finger print" width="70%" />
      </div>
    </div>
  );
}

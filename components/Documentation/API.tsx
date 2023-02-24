import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 13px;
  li {
    list-style-type: auto;
  }
`;
export default function API() {
  return (
    <div>
      <Ul>
        <li>Integrate BIoT fingerprint based authentication with Wazuh</li>
        <li>Integrate BIoT fingerprint with two factor authentication</li>
        <li>
          Integrate BIoT fingerprint based authentication and log with Kibana{" "}
        </li>
      </Ul>
    </div>
  );
}

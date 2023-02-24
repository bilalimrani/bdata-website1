import styled from "styled-components";
const multilayer = require("public/img/multilayer.jpg");

const Ul = styled.ul`
  padding: 13px;
  li {
    list-style-type: auto;
  }
`;

export default function BSTArchitect() {
  return (
    <div>
      BIoT security technology is a multilayer technology using four essential
      layers with each layer combining to create a secure network of trusted
      devices based on the device immutable fingerprints and ensuring that only
      devices with preauthenticate fingerprints are connected with the network.
      <Ul>
        <li>
          Fingerprints are created based on the device information and immutable
          hash, which ensures that the fingerprint can't be regenerated or
          stolen as there is no copy of the fingerprint stored anywhere.
        </li>
        <li>
          Device endpoint management ensures that every device on the network
          can be securely managed to reduce the cyber risk on the network.
        </li>
        <li>
          Realtime encrypted data from source to cloud or server is incorporated
          in BIoT security technology to ensure that man in middle cyber attacks
          are eliminated upon successful authentication,
        </li>
        <li>
          Intrusion detection and prevention feature of BIoT technology ensures
          that cyber incidents can be securely detected and prevented without
          the need of any 3rd party's hardware or software.
        </li>
      </Ul>
      <img src={multilayer} alt="finger print" width="100%" />
    </div>
  );
}

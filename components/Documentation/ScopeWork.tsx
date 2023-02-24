import styled from "styled-components";

const Ul = styled.ul`
  padding: 0px 25px 15px 25px;

  li {
    list-style-type: unset;
  }
`;

const ItemsHead = styled.div`
  padding: 20px 0px 5px 0px !important;
`;

export default function ScopeWork() {
  return (
    <div>
      The primary objective of this project is to implement a comprehensive,
      multilayer cyber security solution on a network of gateways, PLCs, and IoT
      devices installed on microgrids along a country pipeline. These devices
      will transmit data to a monitoring center for surveillance and monitoring
      purposes. In addition to securing the microgrid network, lightweight,
      multilayer cyber security measures will also be applied to devices with
      Windows, Linux, and Android-based operating systems.
      <br />
      <ItemsHead>
        The scope of work for this project includes the following measures:
      </ItemsHead>
      <Ul>
        <li>
          Implementing end-to-end real-time data and file/log transfer
          encryption for added security.
        </li>
        <li>
          Implementing fingerprint-based authentication for secure access to the
          network and devices.
        </li>
        <li>
          Implementing zone segregation/air gap techniques to separate and
          isolate sensitive areas of the network.
        </li>
        <li>
          Implementing real-time malware detection to quickly identify and
          respond to potential threats.
        </li>
        <li>
          Implementing real-time endpoint remote monitoring, management, and
          response capabilities to improve visibility and control over the
          network.
        </li>
        <li>
          Implementing real-time firewall monitoring and management to secure
          the\ network perimeter.
        </li>
        <li>
          Implementing real-time device location monitoring to identify the
          location of devices on the network.
        </li>
        <li>
          Implementing an intrusion detection system (IDS) and intrusion
          prevention system (IPS) to detect and prevent unauthorized access.
        </li>
        <li>
          Implementing threat detection aligned to the MITRE ATT&CK ICS
          framework and knowledge base for detection and mitigation of any known
          attack patterns against industrial control systems.
        </li>
        <li>
          Implementing device continuous integration/continuous delivery
          (CI/CD), orchestration, and patch management to keep devices updated
          and secure.
        </li>
        <li>
          Developing a real-time IoT/Sensor data analytics dashboard to receive
          data from on-site sensors and provide valuable insights.
        </li>
      </Ul>
    </div>
  );
}

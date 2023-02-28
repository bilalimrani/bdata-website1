const bstot = require("public/img/bstot.jpg");
const bst = require("public/img/bst.jpg");

export default function BSTOTArchitect() {
  return (
    <div>
      BIoT (Blockchain Internet of Things) security technology is a
      comprehensive solution designed to protect IT, OT, IoT, and cloud
      infrastructure from various cyber threats such as DDoS (Distributed Denial
      of Service) attacks, man-in-the middle attacks, malware deployment, and
      ransomware. It employs a multilayer approach to cyber security, making it
      easy to implement across the entire network.
      <br />
      BIoT security technology offers an effective way to protect IT, OT, IoT,
      and cloud infrastructure from various cyber threats, by simplifying the
      management of security measures, increasing the efficiency of security
      processes and improving the overall security posture of an organization.
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      
        <img src={bstot} alt="finger print" width="80%" />
        <br />
        <img src={bst} alt="finger print" width="80%" />
      </div>
    </div>
  );
}

import PressCommon from "./common";
import { FeatureListing } from "../../styles/styledComponents/ProductListing.style";
import { Button, FooterSection } from "./common.style";
import { useRouter } from "next/router";

export default function Nivee({ data }) {
  const router = useRouter();
  return (
    <div>
      <PressCommon data={data} />
      <p>
        BData is partnering with Nivee to offer IT and OT based cyber security
        managed services for customers in North America region using BDATA’s
        Zero Trust Cyber Security Platform.
      </p>
      <p>
        <b>Toronto, Canada, October 21, 2022</b> – B Data Solutions Inc.
        released details of a partnership with Nivee Cyber Security Inc.
        (Nivee).
      </p>
      <p
        style={{
          fontFamily: "monospace",
          color: "#2B7BB9",
          fontSize: "20px",
        }}
      >
        Nivee is an Indigenous-Owned cyber security firm that is focused on
        Ethical Hacking, Offensive Cyber Security Strategies and Security
        Audits.
      </p>
      <p>
        Nivee is hired by companies to essentially try to hack into them to
        determine where the weaknesses are. After the assessment, Nivee provides
        a remediation strategy for companies to follow to secure these
        weaknesses. Nivee is a collective group of some of the most experienced
        information security professionals in the industry providing services
        such as:
      </p>
      <FeatureListing>
        <li>Penetration Testing</li>
        <li>Vulnerability Assessments</li>
        <li>Social Engineering Assessment</li>
        <li>Red Teaming Engagements</li>
        <li>PCI Penetration Testing</li>
        <li>Cyber Posture Assessments</li>
        <li>Executive Personnel Assessment</li>
        <li>Security Awareness Training</li>
      </FeatureListing>
      <p>
        BData provides off-the-shelf cutting-edge password-less cyber security
        technology, which helps customers to achieve cyber reliance against
        advanced ransomware, DoS, MITM and other attacks.
      </p>
      <p>
        BData provides off-the-shelf cutting-edge password-less cyber security
        technology, which helps customers to achieve cyber reliance against
        advanced ransomware, DoS, MITM and other attacks.
      </p>
      <p
        style={{
          fontFamily: "monospace",
          color: "#2B7BB9",
          fontSize: "20px",
        }}
      >
        BDATA’s BIoT Security Platform provides multilayer cyber security which
        enable companies to achieve zero trust cyber resilience. BIoT Security
        technology is a device architecture and operating system agnostic
        technology, which can be deployed on windows/Mac/Linux/Android and other
        major operating systems.
      </p>
      <h3>BIoT Security Technology Platform includes the following features</h3>
      <FeatureListing>
        <li>Passwordless, Device Fingerprinting based Authentication</li>
        <li>Zero Trust-Based Device Remote Management</li>
        <li>Intrusion Detection</li>
        <li>Malware Detection & Response</li>
        <li>Device Integrity</li>
        <li>End to End Data Encryption</li>
        <li>Incident Response</li>
      </FeatureListing>
      <p>
        As the world continues to become more connected, risks around
        cybersecurity will increase.
      </p>
      <p>
        Together, BDATA and Nivee can provide multilayer cyber security solution
        followed by additional Assessments and Penetration testing across all
        your IT and OT endpoints.
      </p>
      <div className="btnGroup mt-4">
        <Button
          onClick={() => {
            router.push("/contactus");
          }}
          className="btn btn1 btn-primary me-sm-3"
        >
          Demo
        </Button>
        <Button
          href="https://nivee.ca/free-quote/?utm_campaign=bdata"
          target="_blank"
          className="btn btn1 btn-primary me-sm-3"
        >
          Free Quote
        </Button>
      </div>
      <FooterSection>
        {/* <img src={bdataPattern} alt="" /> */}
        <p className="footer1">
          “Working together, BDATA and Nivee will help companies mitigate
          cybersecurity risks and support the implementation of IoT devices
          without worries while offering end-to-end secure connectivity by using
          BDATA’s multilayer cyber security technology,”
        </p>
        <p className="footer2">
          <i>Syed Bari, Founder of BDATA Solutions</i>
        </p>
      </FooterSection>
      <FooterSection>
        {/* <img src={bdataPattern} alt="" /> */}
        <p className="footer1">
          “Our Purpose at Nivee is to Keep People Secure in the Digital World.
          The best way to achieve this is through Strategic Partnerships with
          others who are passionate about this purpose. This is why we are
          excited to join forces with BDATA,” With this partnership, we can help
          our clients strengthen their digital footprint.
        </p>
        <p className="footer2">
          <i>Said Jeremiah Vanderlaan, COO of Nivee</i>
        </p>
      </FooterSection>
    </div>
  );
}

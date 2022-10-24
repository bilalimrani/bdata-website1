import Anchor from "../Common/Anchor";
import { FeatureListing } from "../../styles/styledComponents/ProductListing.style";
import PressCommon from "./common";

export default function SecureConnectivity({ data }) {
  return (
    <div>
      <PressCommon data={data} />
      <br />
      <p>
        Sep 14, 2022 (Vehement Media via COMTEX) -- Toronto, Canada -- B Data is
        partnering with Soracom to offer a secure edge connectivity bundle which
        helps customers to save on the additional cost and integration time to
        achieve cyber resilience for data streaming from IoT edge devices to the
        cloud.
      </p>
      <p>
        <b>B Data Solutions Inc.</b> released details of a partnership with{" "}
        <Anchor
          text="Soracom Global, Inc."
          href="https://www.soracom.io/about-us-soracom/"
          style={{ textDecoration: "underline" }}
        />
        , Soracom offers a complete, cloud-native IoT platform with full
        cellular MVNO capability, including a built-in management simcard
        console and API and a robust suite of tools for cloud integration, data
        management and secure networking. Launched in Japan in late 2015,
        Soracom now connects more than 4 million devices around the world and
        gives both start-up and enterprise firms the flexibility to scale
        effectively from early prototypes to field deployments of a million
        devices or more.
      </p>
      <p>
        B Data provides off-the-shelf cutting-edge password-less cyber security
        technology, which helps customers to achieve cyber reliance against
        advanced ransomware, DoS, MITM and other attacks
      </p>
      <h4 style={{ fontWeight: "700", marginBottom: "0px" }}>
        Secure edge connectivity bundle:
      </h4>
      <p>
        Secure edge connectivity bundle is an off-the-shelf and ready-to-use
        bundle that starts from $50 / month (T&C applied),
      </p>

      <FeatureListing>
        <h5 className="fw-bold">
          The secure edge connectivity bundle includes the following
        </h5>
        <li>
          Starting from 100 MB Data Plan ($5/month for every additional 100MB
          data plan)
        </li>
        <li>
          Partners Edge Device (Intel, Advance, ASUS, Adlink, industrial
          Raspberry pi)
        </li>
        <li>Password-less device fingerprint-based authentication</li>
        <li>Realtime - Data Encryption / Secure data tunnel</li>
        <li>Pre-deployed endpoint management</li>
        <li>Pre-deployed intrusion detection</li>
        <li>Pre-deployed file integrity</li>
      </FeatureListing>
      <p>Buy Now, using the following link,</p>
      <Anchor
        text="https://soracom.biot.bdata.ca/"
        href="https://soracom.biot.bdata.ca/"
        style={{ textDecoration: "underline" }}
      />
      <p>
        “Working together, BDATA and Socarom will help companies mitigate
        cybersecurity risks and support the implementation of IoT devices
        without worries while offering end-to-end secure connectivity by using
        BDATA’s multilayer cyber security technology,” said Syed Bari, Founder
        of BDATA Solutions.
      </p>
      <p>
        “Soracom is committed to bringing connected solutions to market quickly
        and succeeding at scale in IoT,” said Kenta Yasukawa, CTO and Co-Founder
        of Soracom. “We are happy to collaborate with BDATA to remove complexity
        for customers around the world seeking to ensure cyber resilience while
        lowering capital costs and accelerating deployment time.”
      </p>
    </div>
  );
}

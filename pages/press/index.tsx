// import { Col, Nav, Row, Tab } from "react-bootstrap";
import Head from "next/head";
import Desjardins from "../../components/Press/Desjardins";
import LionsLair from "../../components/Press/LionsLair";
import Nivee from "../../components/Press/Nivee";
import SecureConnectivity from "../../components/Press/SecureConnectivity";
import Supermicro from "../../components/Press/Supermicro";
import Telus from "../../components/Press/Telus";
import Tabs from "../../components/Tabs";
import { BannerWrapper } from "../../styles/styledComponents/pressRelease.style";
const pressNivee = require("../../public/img/pressNivee.svg");
const secureEdgePress = require("../../public/img/secureEdgePress.jpeg");
const desjardinsPress1 = require("../../public/img/desjardinsPress1.png");

const data = {
  item: [
    {
      name: "BDATA & NIVEE Partnership",
      eventKey: "0",
    },
    {
      name: "Secure edge connectivity bundle",
      eventKey: "1",
    },
    {
      name: "BDATA won Desjardins Competition.",
      eventKey: "2",
    },
    {
      name: "Collaboration with Telus",
      eventKey: "3",
    },
    {
      name: "BDATA win Lions Lair competition",
      eventKey: "4",
    },
    {
      name: "Collaboration with Supermicro computer Inc",
      eventKey: "5",
    },
  ],
  content: [
    {
      eventKey: "0",
      component: Nivee,
      title: `BDATA and Nivee (An Indigenous Cyber Security Company) partnering to support customers in achieving Zero Trust cyber 
resilience, system pen testing, vulnerability detection and response.`,
      img: pressNivee,
    },
    {
      eventKey: "1",
      component: SecureConnectivity,
      img: secureEdgePress,
      title:
        "Secure edge connectivity bundle is a secure, cost-effective, and Off-the-shelf solution which provides cyber resilience, global connectivity, and endpoint management for mission critical IoT projects.",
    },
    {
      eventKey: "2",
      component: Desjardins,
      title: "BDATA won Desjardins Bank Cyber Security Competition.",
      img: desjardinsPress1,
    },
    {
      eventKey: "3",
      component: Telus,
      title: `B Data Solutions and TELUS Collaboration`,
    },
    {
      eventKey: "4",
      component: LionsLair,
      title: `BDATA Solution won the 2nd prices in Innovation factory’s
    annual Lions Lair pitch competition sixteen innovativestartups
    pitch to three industry - leading judges and a television
    audience during the virtual bracket style tournament that took
    place on september 21-24.`,
    },
    {
      eventKey: "5",
      component: Supermicro,
      title: `BDATA Solutions and Supermicro Computer Inc. Announces Partnership to Offer the World’s First Blockchained IOT Embedded Simcard Enable IoT Gateway Device`,
    },
  ],
};

function PressRelease() {
  return (
    // <div style={{ margin: "30px 0px" }}>
    <>
      <Head>
        <title>Press Releases</title>
      </Head>
      <BannerWrapper>
        <Tabs data={data} />
      </BannerWrapper>
    </>
    // </div>
  );
}

export default PressRelease;

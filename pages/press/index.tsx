// import { Col, Nav, Row, Tab } from "react-bootstrap";
import Head from "next/head";
import Desjardins from "../../components/Press/Desjardins";
import LionsLair from "../../components/Press/LionsLair";
import Nivee from "../../components/Press/Nivee";
import SecureConnectivity from "../../components/Press/SecureConnectivity";
import Telus from "../../components/Press/Telus";
import Tabs from "../../components/Tabs";
import { BannerWrapper } from "../../styles/styledComponents/pressRelease.style";
const pressNivee = require("../../public/img/pressNivee.svg");

const data = {
  item: [
    {
      name: "BDATA & NIVEE Partnership",
      eventKey: "0",
    },
    // {
    //   name: "Secure edge connectivity bundle",
    //   eventKey: "1",
    // },
    // {
    //   name: "BDATA won Competition",
    //   eventKey: "2",
    // },
    // {
    //   name: "Collaboration with Telus",
    //   eventKey: "3",
    // },
    // {
    //   name: "BDATA win top prizes",
    //   eventKey: "4",
    // },
  ],
  content: [
    {
      eventKey: "0",
      component: Nivee,
      title: `BDATA and Nivee (An Indigenous Cyber Security Company) partnering to support customers in achieving Zero Trust cyber 
resilience, system pen testing, vulnerability detection and response.`,
      img: pressNivee,
    },
    // {
    //   eventKey: "1",
    //   component: SecureConnectivity,
    //   title:
    //     "Secure edge connectivity bundle is a secure, cost-effective, and Off-the-shelf solution which provides cyber resilience, global connectivity, and endpoint management for mission critical IoT projects.",
    // },
    // {
    //   eventKey: "2",
    //   component: Desjardins,
    // },
    // {
    //   eventKey: "3",
    //   component: Telus,
    //   title: `BDATA solutions Inc is collaborating with Telus to implement
    // blockchain connectivity of IoT devices using BDATA-Blockchain
    // on Telus 4G/5G network in canada. This provides password-less
    // highly secure and desirable intelligent plant management
    // system (IPMS) as an industry 4.0 platform to process
    // industries.`,
    // },
    // {
    //   eventKey: "4",
    //   component: LionsLair,
    //   title: `BDATA Solution won the 2nd prices in Innovation factory’s
    // annual Lions Lair pitch competition sixteen innovativestartups
    // pitch to three industry - leading judges and a television
    // audience during the virtual bracket style tournament that took
    // place on september 21-24.`,
    // },
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

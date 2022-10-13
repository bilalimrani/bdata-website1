const soracom = require("public/img/soracomPress.svg");
const desjandis = require("public/img/desjardinsPress.svg");
const microservice = require("public/img/supermicroPress.svg");
const lionliar = require("public/img/lionliarPress.svg");
const telus = require("public/img/telusPress.svg");

export default {
  banner: {
    title: "Press",
    subTitle: ``,
    bgImage: require("public/img/pressImage.svg"),
  },
  sectionsData: [
    {
      title: "Collaboration with Supermicro computer Inc",
      subTitle: `BDATA solution and supermicro computerInc are collaborating to
    offer the one of it’s kind, multi-layared end to end highly
    secured Blockchain IoT (BIoT) embeded Gateway Devices to
    provide data immulability and secure connectivity for critical
    assets remote monitering and operation in iol and gas, power,
    defence, health care and smart city projects.`,
      link: "https://innovationfactory.ca/bdata-solutions-and-supermicro-computer-inc-announces-partnership/",
      img: microservice,
    },
    {
      title: "BDATA win top prizes in Lions Lair competition",
      subTitle: `BDATA Solution won the 2nd prices in Innovation factory’s
    annual Lions Lair pitch competition sixteen innovativestartups
    pitch to three industry - leading judges and a television
    audience during the virtual bracket style tournament that took
    place on september 21-24.`,
      link: "https://theforge.mcmaster.ca/imaginable-solutions-and-bdata-win-top-prizes-in-lions-lair/",
      img: lionliar,
    },
    {
      title: "Collaboration with Telus",
      subTitle: `BDATA solutions Inc is collaborating with Telus to implement
    blockchain connectivity of IoT devices using BDATA-Blockchain
    on Telus 4G/5G network in canada. This provides password-less
    highly secure and desirable intelligent plant management
    system (IPMS) as an industry 4.0 platform to process
    industries.`,
      link: "https://theforge.mcmaster.ca/b-data-solutions-and-telus-collaboration/",
      img: telus,
    },
    {
      title: "BDATA won Desjardins Bank Cyber Security Competition.",
      subTitle: ``,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6857381812528799744/",
      img: desjandis,
    },
    {
      title: "Secure edge connectivity bundle is a secure and cost-effective.",
      subTitle: `Secure edge connectivity bundle is a secure, cost-effective, and Off-the-shelf solution which provides cyber resilience, global connectivity, and endpoint management for mission critical IoT projects.`,
      link: "https://www.marketwatch.com/press-release/secure-edge-connectivity-bundle-is-a-secure-cost-effective-and-off-the-shelf-solution-which-provides-cyber-resilience-global-connectivity-and-endpoint-management-for-mission-critical-iot-projects-2022-09-14?mod=search_headline",
      img: soracom,
    },
  ],
};

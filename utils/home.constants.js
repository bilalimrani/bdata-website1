const BannerImage = require("public/img/banner-bg.png");
const bdataPattern = require("public/img/bdata-logo.svg");
const Jerdins = require("public/img/desjardins.svg");
const Rogers = require("public/img/rogers.svg");
const HelloTomarrow = require("public/img/newWorledReport.png");
const Artc = require("public/img/agency.svg");
const Image42 = require("public/img/partners/image_42.svg");
const Image43 = require("public/img/partners/image_43.svg");
const Image44 = require("public/img/partners/image_44.svg");
const Image45 = require("public/img/partners/image_45.svg");
const Image46 = require("public/img/partners/image_46.svg");
const Image47 = require("public/img/partners/image_47.svg");
const Image48 = require("public/img/partners/image_48.svg");
const Image49 = require("public/img/partners/image_49.svg");
const Image51 = require("public/img/partners/image_51.svg");
const Image53 = require("public/img/partners/image_53.svg");
const Image54 = require("public/img/partners/image_54.svg");
const Image55 = require("public/img/partners/image_55.svg");
const Image56 = require("public/img/partners/image_56.svg");
const Image57 = require("public/img/partners/image_57.svg");

export default {
  banner: {
    title: "Zero Trust for Network Security",
    subTitle: `Each device on the network identified with unique device multifactor based fingerprint. Network of devices are segregated/air gapped by design to avoid cyber-attack spill to
another network.`,
    bgImage: require("public/img/banner-bg.svg"),
    sideImage: bdataPattern,
    button: "Start free trial",
  },
  whitePapper: {
    banner: {
      title: "Download BDATA Whitepaper",
      bgImage: require("public/img/resources1.svg"),
    },
  },
  lightWeightSection: {
    section1: {
      title:
        "Zero trust - a multilayer cyber security for industrial control system",
      subTitle:
        "BIoT Security Technology IS a lightweight multilayer cyber security solution which enables companies to achieve cyber security compliances with respect to TSA, IECT 62443, ISO, NIST, HIPAA, and other local and international standards.",
    },
    section2: {
      title:
        "Immutable Device Fingerprint Based Segregated/Airgap network for IT/OT/IoT devices",
      subTitle1:
        "BIoT technology creates immutable fingerprints for each device before it gets enabled to connect and communicate with designated servers/cloud infrastructure. Each device is uniquely identified based on the fingerprints, which contain information about the device hardware, processors etc.",
      subTitle2:
        "Based on the fingerprints, devices are identified as IT or OT and can only communicate with designated servers.",
    },
    section3: {
      title: "enhance cyber security for azure and aws iot hub using biot",
      subTitle:
        "BIoT Security technology enhance azure and aws iot hub security and ensures complete autonomy of cyber security using pki (public private key infrastructure) and immutable device fingerprint authentication.",
    },
    section4: {
      title: "Protect Credentials Using BIoT Security Technology",
      subTitle:
        "In addition to finance and manufacturing, professional and business services was heavily targeted in 2021 cyber-attacks, particularly by ransomware actors, each of the cyber-attacks had a root cause of credential compromise either by DDoS, Insiders, or credential harvesting",
      subTitle2:
        "Based on the fingerprints, devices are identified as IT or OT and can only communicate with designated servers.",
    },
  },
  customers: {
    title: "Customer Stories",
    story1: {
      name: "James Castle",
      designation: "CEO, CISO & CSO, Terranova Cyber Solutions",
      message:
        "We are excited to work with BDATA and deploy BIoT technology for defense high value critical application that include drones and other assets. We strongly believe in the success of BIoT technology deployment to protect critical infrastructures” said James Castle, CEO, CISO & CSO, Terranova Cyber Solutions.",
    },
    story2: {
      name: "Jeff Brown",
      designation: "Senior sales director",
      message:
        "Our industrial-grade connectivity devices are an ideal fit for BDATA’s blockchain-enabled IoT solution,” said Jeff Brown, senior sales director for Advantech’s Industrial IoT Group. “We’re continually looking for domain-focused, strategic partnerships that help our customers achieve successful IoT connections–all more securely, and with fewer challenges”",
    },
    story3: {
      name: "Wassim Ghadban",
      designation: "Vice President, Global Digital & Innovation",
      message:
        "Many digital transformation projects are lacking strong cyber security, considering BIoT with 8D digital twin will enable companies to achieve financial and operational benefits without compromising security on critical infrastructure, said Wassim Ghadban, Vice President, Global Digital & Innovation, SNC Lavalin.",
    },
  },
  awards: {
    title: "Awards",
    subTitle:
      "BDATA won several global cyber security competitions and awards.",
    data: [
      {
        image: Rogers,
        text: "1<sup>st</sup> place Rogers 5g Cyber Security Competition",
      },
      {
        image: Jerdins,
        text: "2<sup>nd</sup> place desjardin bank cyber security competition",
      },
      {
        image: Artc,
        text: "Won singapore's secure remote operation competition",
      },
      {
        image: HelloTomarrow,
        text: "best iot cyber security product award",
      },
    ],
  },
  partners: {
    title: "Partners / Trusted by",
    data: [
      {
        image: Image42,
        alt: "",
      },
      {
        image: Image43,
        alt: "",
      },
      {
        image: Image44,
        alt: "",
      },
      {
        image: Image45,
        alt: "",
      },
      {
        image: Image46,
        alt: "",
      },
      {
        image: Image47,
        alt: "",
      },
      {
        image: Image48,
        alt: "",
      },
      {
        image: Image49,
        alt: "",
      },
      {
        image: Image51,
        alt: "",
      },
      {
        image: Image53,
        alt: "",
      },
      {
        image: Image54,
        alt: "",
      },
      {
        image: Image55,
        alt: "",
      },
      {
        image: Image56,
        alt: "",
      },
      {
        image: Image57,
        alt: "",
      },
    ],
  },

  privacyText:
    "B Data Solutions Inc. is committed to protecting and respecting your privacy, From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:",
  agreeTerms:
    "I agree to receive other communications from B Data Solutions Inc..",
  unsubscribeText:
    "You can unsubscribe from these communications at any time. ",
};

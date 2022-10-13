const BannerImage = require("public/img/resources1.svg");
const bdataPattern = require("public/img/resources1.svg");
const automotive = require("public/img/automotive.png");
const goldmine = require("public/img/goldmine.png");
const screen = require("public/img/screen.webp");
const technology = require("public/img/whitepaper4.png");
const defence = require("public/img/defense.png");
const Frame78 = require("public/img/zero-trust.webp");

export default {
  banner: {
    title: "BDATA Resources",
    subTitle: "Whitepapers, Data sheets, Use cases and Videos",
    bgImage: BannerImage,
    sideImage: bdataPattern,
  },
  whitePapers: [
    {
      title:
        "Zero Trust - A multilayer cyber security for industrial control system",
      img: Frame78,
    },
    {
      title:
        "Immutable device fingerprint based segregated/airgap network for IT/OT/IoT devices",
      img: screen,
    },
    {
      title:
        "Enhance cyber security for Azure and AWS IoT hub using BIoT Security Technology",
      img: defence,
    },
    {
      title: "Realtime Malware Hunting and Response",
      img: technology,
    },
  ],
  useCases: [
    {
      title: "Cyber security for Automotive Industry",
      img: automotive,
    },
    {
      title: "Cyber security for Mining Industry",
      img: goldmine,
    },
  ],
};

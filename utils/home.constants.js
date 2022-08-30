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
    title: "Securing the world one device at a time",
    subTitle: ``,
    bgImage: require("public/img/banner-bg.svg"),
    sideImage: bdataPattern,
  },
  whitePapper: {
    banner: {
      title: "Download BDATA Whitepaper",
      bgImage: require("public/img/resources1.svg"),
    },
  },
  awards: {
    title: "Awards",
    data: [
      {
        image: Rogers,
        text: "1st place Rogers 5g Cyber Security Competition",
      },
      {
        image: Jerdins,
        text: "2nd place desjardin bank cyber security competition",
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
    title: "Partners / Trusted by:",
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

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CustomerWrapper, ProfileWrapper } from "./CustomersStories.style";
import homeConstants from "../../../utils/home.constants";
const user = require("public/img/user-img.png");
const user2 = require("public/img/user-2.png");
const compImage = require("public/img/slider-img.svg");
const advantech = require("public/img/advan-tech.svg");
const wasim = require("public/img/wasim.png");
const sncLogo = require("public/img/snc-logo.png");



export const data = [
  {
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstaller",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Icon man 3",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
  },
];
const CustomersStories = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // loop: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1378,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 800,
      //   settings: 'unslick',
      // },
    ],
  };
  const ref = useRef();
  return (
    <CustomerWrapper>
      <div className="container">
        <h3 className="text-center custom-padding-subsection fw-bold">
          {homeConstants.customers.title}
        </h3>

        {/* <Slider {...settings}> */}
        <div className="row mt-lg-5 mt-sm-3">
          <div className="col-md-6 col-lg-4 py-3">
            <ProfileWrapper>
              <div className="d-flex align-items-center justify-content-start">
                <img src={user} alt="" className="round-img" />

                <div className="ps-3">
                  <p className="small-text m-0 fw-semibold">{homeConstants.customers.story1.name}</p>
                  <p className="small-text m-0 grey-clr">
                    {homeConstants.customers.story1.designation}
                  </p>
                </div>
              </div>

              <div className="bottom-section">
                <p className="text-left small-text dark-grey">
                  {homeConstants.customers.story1.message}
                </p>
                <div className="bottom-img-wrapper">

                  <img src={compImage} alt="" />
                </div>
              </div>
            </ProfileWrapper>
          </div>
          <div className="col-md-6 col-lg-4 py-3">
            <ProfileWrapper>
              <div className="d-flex align-items-center justify-content-start">
                <img src={user2} alt="" className="round-img" />
                <div className="ps-3">
                  <p className="small-text m-0 fw-semibold">{homeConstants.customers.story2.name}</p>
                  <p className="small-text m-0 grey-clr">
                    {homeConstants.customers.story2.designation}
                  </p>
                </div>
              </div>

              <div className="bottom-section">
                <p className="text-left small-text dark-grey">
                  {homeConstants.customers.story2.message}
                </p>
                <div className="bottom-img-wrapper">
                  <img src={advantech} alt="" />
                </div>
              </div>
            </ProfileWrapper>
          </div>

          <div className="col-md-6 col-lg-4 py-3">
            <ProfileWrapper>
              <div className="d-flex align-items-center justify-content-start">

                <img src={wasim} alt="" className="round-img" />

                <div className="ps-3">
                  <p className="small-text m-0 fw-semibold">{homeConstants.customers.story3.name}</p>
                  <p className="small-text m-0 grey-clr">
                    {homeConstants.customers.story3.designation}
                  </p>
                </div>
              </div>

              <div className="bottom-section">
                <p className="text-left small-text dark-grey">
                  {homeConstants.customers.story3.message}
                </p>
                <div className="bottom-img-wrapper">
                  <img src={sncLogo} alt="" />

                </div>
              </div>
            </ProfileWrapper>
          </div>
        </div>
        {/* <ProfileWrapper>
            <div className="d-flex align-items-center justify-content-start">
              <Image
                src={user}
                width={48}
                height={48}
                className="img-wrapper"
              />
              <div className="ps-3">
                <p className="small-text m-0 fw-semibold">Darrell Steward</p>
                <p className="small-text m-0 grey-clr">
                  CEO, CISO & CSO, Terranova Cyber Solutions
                </p>
              </div>
            </div>

            <div className="bottom-section">
              <p className="text-left small-text dark-grey">
                We are excited to work with BDATA and deploy BIoT technology for
                defense high value critical application that include drones and
                other assetx  s. We strongly believe in the success of BIoT
                technology deployment to protect critical infrastructures” said
                James Castle, CEO, CISO & CSO, Terranova Cyber Solutions.
              </p>
              <div className="bottom-img-wrapper">
                <Image
                  src={compImage}
                  width={48}
                  height={48}
                  className="img-wrapper"
                />
              </div>
            </div>
          </ProfileWrapper> */}
        {/* </Slider> */}
      </div>
    </CustomerWrapper>
  );
};

export default CustomersStories;

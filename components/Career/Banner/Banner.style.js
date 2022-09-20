import styled from "styled-components";
import aboutUs from "public/img/career-page.png";
import bdataPattern from "public/img/logohalf.svg";

const BannerWrapper = styled.div`
  height: 500px;
  background-image: url(${aboutUs}), url(${bdataPattern});
  background-repeat: no-repeat;
  background-size: 50% 100%, 100px 270px;
  background-position: center right, bottom left;
  @media (max-width: 1379px) {
    height: 400px;
    background-size: 50% 100%, 60px 190px;
  }
  @media (max-width: 1199px) {
    height: 400px;
    background-size: 40% 100%, 50px 170px;
  }
  @media (max-width: 992px) {
    height: 300px;
    background-size: 40% 100%, 25px 100px;
  }
  @media (max-width: 767px) {
    height: auto;
    background-image: none;
    background-color: black;
  }
  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .banner-content-wrapper {
    max-width: 450px;
    width: 100%;
    font-style: normal;
    font-size: 40px;
    line-height: 10px;
    letter-spacing: 1px;
    position: relative;
    color: #000000;
    @media (max-width: 767px) {
      padding: 50px 0;
    }
    @media (max-width: 575px) {
      padding: 20px;
    }
    p {
      font-size: 16px;
    }
  }

  .heading {
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 1px;

    color: #000000;
    @media (max-width: 767px) {
      color: white;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    mix-blend-mode: normal;
    @media (max-width: 767px) {
      color: white;
    }
  }
`;

export { BannerWrapper };

import styled from "styled-components";
import BannerImage from "public/img/banner-bg.svg";
import bdataPattern from "public/img/bdata-logo.svg";

const Container = styled.div`
  background: #000000;
  /* opacity: 0.6; */
`;

const BannerWrapper = styled.div`
  height: 630px;
  background-image: url(${(props) => props?.bgImage})
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media (max-width: 991px) {
    height: 450px;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  &::before {
    content: url(${(props) => props.sideImage})
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 135px;
    height: 315px;
    @media (max-width: 991px) {
      width: 75px;
      height: 215px;
      right: 58px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .banner-content-wrapper {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    z-index: 111;
  }
  h2 {
    color: white;
    font-weight: 900 !important;
    margin: 0 !important;
    margin-bottom: 90px !important;
    @media (max-width: 991px) {
      margin-bottom: 50px !important;
    }
    @media (max-width: 767px) {
      margin-bottom: 30px !important;
    }
  }
  .custom-btn-white {
    background: white;
    padding: 18px 40px;
    font-size: 16px;
    color: #004d88;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }
`;

const Button = styled.button`
  color: #004d88;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 20px 32px;
`;

export { BannerWrapper, Button, Container };

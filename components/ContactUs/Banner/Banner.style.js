import styled from "styled-components";
import BannerImage from "public/img/banner/contact.svg";
// import bdataPattern from "public/img/right-logo.svg";

const BannerWrapper = styled.div`
  height: 620px;
  background-color: black;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media (max-width: 1199px) {
    background-position: bottom right -90px;
  }
  @media (max-width: 991px) {
    height: 450px;
    background-position: bottom right 0;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  &::before {
    /* content: url(${bdataPattern}); */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 90px;
    height: 315px;
    @media (max-width: 991px) {
      width: 75px;
      height: 215px;
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
    margin-bottom: 50px !important;
    @media (max-width: 991px) {
      margin-bottom: 30px !important;
    }
    @media (max-width: 767px) {
      margin-bottom: 20px !important;
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
  background: transparent;
  border: 1px solid white;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 17px 32px;
  transition: 0.3s ease;
  &:hover {
    color: #004d88;
    border: 1px solid transparent;
  }
`;

export { BannerWrapper, Button };

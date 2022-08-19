import styled from "styled-components";
import BannerImage from "public/img/aboutus.png";
import bdataPattern from "public/img/right-logo.svg";

const BannerWrapper = styled.div`
  height: 480px;
  // background-color:black;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  h2{
    @media (max-width: 768px) {
      color:white;
    }
  }
  > div {
    height: 100%;
    padding-top: 80px;
  }

  @media (max-width: 1199px) {
    background-position: bottom right -90px;
  }
  @media (max-width: 991px) {
    height: 450px;
    background-position:bottom right -20px;
  }
  @media (max-width: 768px) {
    height: 300px;
    background-image:none;
    background-color:black;
    color:white;
  }
  .banner-content-wrapper {
    text-align: left;
    @media (max-width: 991px) {
      max-width:320px;
    }
  }
  &::before {
    content: url(${bdataPattern});
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 90px;
    height: 315px;
    @media (max-width: 991px) {
      display: none;
    }
  }
`;
export { BannerWrapper };

import styled from "styled-components";
import BannerImage from "public/img/banner/contact.svg";
// import bdataPattern from "public/img/right-logo.svg";

const BannerWrapper = styled.div`
position:relative;
img{
  width:100%;
}
  video {
    width:100%;
    height: 100%;
  }
  @media (max-width: 1199px) {
    background-position: bottom right -90px;
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
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    @media (max-width: 991px) {
      top: 20%;
    }
    @media (max-width: 767px){
      width: 100%;
      padding: 0 30px;
    }
    @media (max-width: 575px){
      top:10%;
    }
    p {
      font-size: 16px;
    }

    h2 {
      color: white;
      font-weight: 900 !important;
      margin: 0 !important;
      margin-bottom: 50px !important;
      text-transform: inherit;
      @media (max-width: 991px) {
        margin-bottom: 30px !important;
      }
      @media (max-width: 767px) {
        margin-bottom: 20px !important;
      }
      @media (max-width: 479px){
        font-size:18px;
      }
    }
  }
  h2 {
    color: white;
    font-weight: 900 !important;
    margin: 0 !important;
    margin-bottom: 50px !important;
    @media (max-width: 991px) {
      margin-bottom: 50px !important;
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

const Button = styled.a`
position: absolute;
left: 50%;
bottom: 50px;
transform: translateX(-50%);
background: transparent;
border: 1px solid white;
color: white;
font-style: normal;
font-weight: 700;
font-size: 16px;
padding: 12px 32px;
border-radius: 8px;
transition: 0.3s ease;
box-shadow: none !important;
@media (max-width: 767px) {
  padding: 8px 24px;
  font-size: 14px;
  bottom:30px;
}
@media (max-width: 480px) {
  padding: 6px 20px;
  font-size: 12px;
  bottom:20px;
}
&:hover {
  background: white;
  border: 1px solid white;
  color: #004d88;
}
`;

export { BannerWrapper, Button };

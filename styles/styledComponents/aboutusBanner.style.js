import styled from "styled-components";
import BannerImage from "public/img/aboutUs.png";
import bdataPattern from "public/img/right-logo.svg";

const BannerWrapper = styled.div`
  height: 680px;
  // background-color:black;
  background-image: url(${BannerImage}) , url(${bdataPattern});
  background-repeat: no-repeat;
  background-size: contain , 160px 380px;
  background-position: bottom right, bottom left -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media (max-width: 1199px) {
    height:500px;
  }
  @media (max-width: 992px) {
    height:400px;
  }
  h2 {
    @media (max-width: 768px) {
      color: white;
    }
  }
  > div {
    height: 100%;
   padding-top:80px;
   @media (max-width: 768px) {
    padding:40px 20px;
   }
   @media (max-width:479px) {
    padding:20px;
   }

  }

   @media (max-width: 1199px) {
    background-image: url(${BannerImage});
    background-position: bottom right, bottom left -20px;
  }
  // @media (max-width: 991px) {
  //   height: 450px;
  //   background-position: bottom right -20px;
  // }
  @media (max-width: 768px) {
    height:auto;
    background-image: none;
    background-color: black;
    color: white;
  }
  .banner-content-wrapper {
    text-align: left;

    @media (max-width: 991px) {
      max-width: 320px;
      padding:0;
    }
  }
 
  .banner-content-wrapper{
    max-width:400px;
    p{
      font-size:16px;
    }
    @media (max-width: 992px) {
      max-width:320px;
    }
  }
  
`;
export { BannerWrapper };

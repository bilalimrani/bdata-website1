import styled from "styled-components";
import aboutUs from "public/img/aboutUs.png";
import bdataPattern from "public/img/logohalf.svg";

const BannerWrapper = styled.div`
height: 650px;  
  .banner{
    height: 650px; 
    width: 630px; 
  background-image: url(${aboutUs});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  position: absolute;
  right: 0px;
  top: 85px;
}
.banner-content-wrapper{
  width: 100%;
  font-family: 'Aileron';
font-style: normal;
font-size: 40px;
line-height: 10px;
letter-spacing: 1px;
position: relative;
color: #000000;
p{
  font-size:16px;
}
}

@media (max-width: 1500px) {
  padding-left:50px;
}
@media (max-width: 991px) {
  height: 450px;
}
@media (max-width: 767px) {
  height: 300px;
}
&::before {
  content: url(${bdataPattern});
  position: absolute;
  left: 0;
  top: 65%;
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
};
.heading {
  font-family: 'Aileron';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1px;
  
  color: #000000;
};
p{
  font-family: 'Aileron';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  mix-blend-mode: normal;
};
  `

export { BannerWrapper };

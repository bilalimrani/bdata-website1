import styled from "styled-components";
// const bgImage = require("public/img/bg-image.png");
import bg_pattern from "public/img/imageas.png";

const ProuctListing = styled.div`
  padding: 50px 0 0;
  @media (max-width: 991px) {
    padding-top: 25px;
  }
  .max-image-content{
    max-width:450px;
  }
  .max-width-100{
    max-width:100%;
  }
  p{
    text-transform:captilize !important;
  }
`;

const Section2 = styled.div`
  p {
    padding-bottom: 35px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }
`;

const Button = styled.a`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;

  &:hover {
    background-color: #004d88 !important;
  }
`;
const ContainerDefault = styled.div`
  max-width: 650px;
  @media (max-width: 991px) {
    margin: 25px 0;
  }
  @media (max-width: 767px) {
    margin: 15px 0;
  }
`;

const FullContainer = styled.div`
max-width: 850px;
@media (max-width: 1600px) {
  max-width:750px;
}
@media (max-width: 991px) {
  margin: 25px 0;
}
@media (max-width: 767px) {
  margin: 15px 0;
}
`;

const InfoArea = styled.section`
  position: relative;
  background-image:  url(${bg_pattern});
  background-position: right center;
  background-repeat: no-repeat;
  background-size:120px 300px;
  
  @media (max-width: 1199px) {
    background: none;
  }
  h3 {
    font-size: 28px;
  }
  .custom-padding {
    // text-transform: uppercase;
    padding-bottom: 20px;

    @media (max-width: 991px) {
      padding-top: 15px;
    }
  }
  p {
    font-size: 16px;
  }
`;

const SectionImage = styled.div`
  max-width: 300px;
  max-height: 395px;
  @media (max-width: 991px) {
    margin: 0 auto;
  }
  img {
    height: 100%;
  }
  &:hover {
    transition-duration: 0.5s;
    box-shadow: 0px 7px 11px 14px rgb(0 0 0 / 24%);
    // margin-top: -20px;
    transform: scale(1.05);
  }
`;

const UL = styled.ul`
  padding-bottom: 20px;
  padding-left: 20px;
  @media (max-width: 991px) {
    padding: 0 10px 10px 0;
  }
  margin: 0;
  li {
    font-size: 16px;
    list-style: disc;
  }
`;
const CustomUl = styled.ul`
margin:0;
li{
    display:flex;
    align-items:flex-start;
    font-size:16px;
    margin-bottom:10px;
}
  li span{
    width:36px;
    min-width:36px;
    height:36px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #2B7BB9;
    font-size:22px;
    margin-right:10px;
  }
`;

const FeatureListing = styled.ul`
padding:20px 0;
margin:0;
  li{
    padding-bottom:10px;
    position:relative;
    padding-left:25px;
  }
  li::before{
    content: '';
    position: absolute;
    top: 35%;
    left: 0px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #2B7BB9;
  }
`

export {
  ProuctListing,
  Section2,
  Button,
  InfoArea,
  SectionImage,
  ContainerDefault,
  UL,
  CustomUl,
  FeatureListing,
  FullContainer
};

import styled from "styled-components";
const bgImage = require("public/img/bg-image.png");
import bg_pattern from "public/img/imageas.png";

const LightWeightSectionWrapper = styled.div`
  padding: 50px 0 50px 0;
  @media (max-width: 991px) {
    padding-top: 25px;
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
  /* max-width: 650px; */
  h3 {
    text-transform: none;
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
  background-image: url(${bgImage});
  background-position: top right, right center;
  background-repeat: no-repeat;
  background-position-y: 55px;
  background-size: 450px 375px, 120px 300px;
  @media (max-width: 1199px) {
    background-position: top 90px right, right center;
    background-size: 200px 200px, 70px 200px;
  }
  @media (max-width: 991px) {
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

export {
  LightWeightSectionWrapper,
  Section2,
  Button,
  InfoArea,
  SectionImage,
  ContainerDefault,
  UL,
};

import styled from "styled-components";
const bgImage = require("public/img/bg-image.png");

const LightWeightSectionWrapper = styled.div`
  padding: 50px 0 0;
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

const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;

  &:hover {
    background-color: #004d88 !important;
  }
`;
const ContainerDefault = styled.div`
max-width:650px;
@media (max-width: 991px) {
  margin:25px 0;
}
`

const InfoArea = styled.section`
  position: relative;
  background-image: url(${bgImage});
background-position:top -20px right;
background-repeat: no-repeat;
background-size: 450px 375px;
@media (max-width: 1199px) {
  background-size: 300px 300px;
}
@media (max-width: 991) {
  background-size: 250px 250px;
}
  h3{
    font-size:28px;
  }
  .custom-padding{
    padding-bottom:20px;
    @media (max-width: 991px) {
      padding-top: 15px;
    }
  }
  p{
    font-size:16px;
  }
`;

const SectionImage = styled.div`
max-width:300px;
max-height:395px;
@media (max-width: 991px) {
  margin:0 auto;
}
img{
  height:100%;
}
  &:hover {
    transition-duration: 0.5s;
    box-shadow: 0px 7px 11px 14px rgb(0 0 0 / 24%);
    // margin-top: -20px;
    transform:scale(1.05);
  }
`;



const UL = styled.ul`
padding-bottom:20px;
padding-left:20px;
@media (max-width: 991px) {
  padding:0 10px 10px 0;
}
margin:0;
  li {
    font-size:16px;
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
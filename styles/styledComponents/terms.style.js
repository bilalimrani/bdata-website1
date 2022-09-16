import styled from "styled-components";
import rightImg from "public/img/right-side-img.png";
import leftImg from "public/img/left-side-img.png";

const MainWrapper = styled.div`
  padding:30px 80px;
  background-image: url(${rightImg}) , url(${leftImg});
  background-repeat: no-repeat;
background-size: 80px 150px;
  background-position: bottom 30% right, center left;
  @media (max-width: 768px) {
    background-size: 50px 100px ;
    padding:30px 55px;
  }
  @media (max-width: 768px) {
    background:none !important;
    padding:20px;
  }
  .email-link{
    color:#5aaedd;
  }
`;

export { MainWrapper };

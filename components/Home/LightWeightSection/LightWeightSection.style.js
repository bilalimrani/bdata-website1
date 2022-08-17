import styled from "styled-components";

const LightWeightSectionWrapper = styled.div`
  padding: 50px 0 100px;
`;

const Section2 = styled.div`
  p {
    padding-bottom: 35px;
  }
`;

const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;
  letter-spacing: -0.259387px;
  margin: 20px 0;

  &:hover {
    background-color: #004d88 !important;
  }
`;

const InfoArea = styled.section`
  position: relative;
`;

const SideImage = styled.img`
  position: absolute;
  right: 0;
  top: 10%;
  width: 300px;

  @media (max-width: 1000px) {
    ani-img {
      display: none;
    }
  }
`;

const SectionImage = styled.div`
  &:hover {
    transition-duration: 0.5s;
    box-shadow: 0px 7px 11px 14px rgb(0 0 0 / 24%);
    margin-top: -20px;
  }
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
  margin-top: 0px !important;
  color: #000000;
`;

const UL = styled.ul`
  li {
    list-style: disc;
  }
`;

export {
  LightWeightSectionWrapper,
  Section2,
  Button,
  InfoArea,
  SideImage,
  SectionImage,
  H1,
  UL,
};

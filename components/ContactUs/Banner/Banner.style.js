import styled from "styled-components";

const BannerWrapper = styled.div`
height: 482px;
background: #000000;
@media (max-width: 991px) {
    height: 450px;
    .pattern {
        display: none;
    };
    .icon1 {
        display: none;
    };
    .heading {
        position: relative;
    left: 10px;
    top: 50px;
    };
  };
  @media (max-width: 767px) {
    height: 300px;
    .pattern {
        display: none;
    };
    .icon1 {
        display: none;
    };
    .heading {
        position: relative;
    left: 10px;
    top: 50px;
    };
  };
.row {
 width: 100%;
};
.heading {
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
/* identical to box height */

text-align: center;
letter-spacing: 0.8px;

color: #FFFFFF;
};
.pattern {
    width: 88px;
height: 207px;
};
.icon1 {
    float: right;
};
`;
const Button = styled.button`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.2px;
color: #004D88;
  padding: 20px 32px;
  position: relative;
    left: 110px;
    top: 50px;
    @media (max-width: 991px) {
        top: 100px
      };
      @media (max-width: 767px) {
        top: 100px
    };
`;

export { BannerWrapper, Button };

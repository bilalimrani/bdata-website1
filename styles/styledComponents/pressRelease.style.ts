import styled from "styled-components";
const bdataPattern = require("public/img/imageas.png");

const BannerWrapper = styled.div`
  padding: 100px 30px;
  min-height: 480px;
  position: relative;
  &::before {
    content: url(${bdataPattern});
    position: absolute;
    right: 0;
    top: 20%;
    /* transform: translateY(-50%); */
    /* width: 70px;
    height: 315px; */
    @media (max-width: 991px) {
      /* width: 75px; */
      /* height: 215px; */
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export { BannerWrapper };

import styled from "styled-components";

const AwardsContainer = styled.div`
  .custom-padding-subsection {
    padding-bottom: 30px;
    font-size: 28px;
  }
  padding: 50px 0 0;
  .slick-dots {
    position: unset !important;
    bottom: unset !important;
    margin: 20px 0 0 !important;
  }
  .slick-dots li button::before {
    content: none !important;
  }
  .slick-dots li button {
    width: 36px !important;
    height: 6px !important;
    background: #e3e3e3 !important;
  }
  .slick-dots li {
    margin: 0 5px;
    width: 36px !important;
    height: 6px !important;
  }
  .slick-dots .slick-active button {
    background: #0976b4 !important;
  }
`;
const CarouselWrapper = styled.div`
  padding: 30px;
  text-align: center;
  border: 1px solid transparent;
  img {
    box-shadow: none !important;
  }

  .bottom-line {
    width: 100%;
    height: 2px;
    background: #ffc313;
  }

  /* &:hover {
    border: 1px solid #d1d0d6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
  } */
`;

export { AwardsContainer, CarouselWrapper };

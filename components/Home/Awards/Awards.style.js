import styled from "styled-components";

const AwardsContainer = styled.div`
  .head-size{
    font-size: 28px;
    font-weight:700;
    text-transform:uppercase;
  }
  .para-text-details{
    padding:0 15px;
    text-align: center !important;
    font-weight: 700;
    text-transform:uppercase;
}
img{
  max-width:100%;
  height:40px;
}
.custom-section-height{
  margin-top:30px;
  min-height:100px;
  border-bottom:2px solid #ffc313;
  @media  (max-width:1400px){
    min-height:150px;
  }
  @media  (max-width:1199px){
    min-height:175px;
  }
  @media  (max-width:991px){
    min-height:115px;
  }
}
  }
  .custom-bottom-padding{
    padding-bottom: 30px;
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

s 

  /* &:hover {
    border: 1px solid #d1d0d6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
  } */
`;

export { AwardsContainer, CarouselWrapper };

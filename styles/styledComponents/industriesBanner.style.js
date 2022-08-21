import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 480px;
  background-color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color:white !important;
  @media (max-width: 991px) {
    height: 380px;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  h2{
    color:white;
    margin-bottom:50px;
    @media (max-width: 1199px) {
      margin-bottom:40px;
    }
    @media (max-width: 991px) {
      margin-bottom:35px;
    }
    @media (max-width: 767px) {
      margin-bottom:25px;
    }
  }


  
`;
const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 17px 32px;
  transition: 0.3s ease;
  &:hover {
    color: #004d88;
    border: 1px solid transparent;
  }
`;

export { BannerWrapper,Button };

import styled from "styled-components";

const ProductWrapper = styled.div`
  margin-bottom: 50px;
  .custom-padding {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .heading {
    font-weight: 700;
    font-size: 28px;
    color: #000000;
    padding-bottom: 30px;
  }
  .custom-padding-top {
    padding-top: 25px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    color: #3b3a40;
  }
  .card-image-center {
    max-width: 500px;
    width: 100%;
    height: 310px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  ul {
    margin: 0;
  }
  ul li {
    list-style-type: none;
    font-size: 16px;
    position: relative;
    padding-left: 20px;
  }
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #004d88;
    @media (max-width: 991px) {
      width: 10px;
      height: 10px;
    }
  }
`;

export { ProductWrapper };

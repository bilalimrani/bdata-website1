import styled from "styled-components";

const ValueWrapper = styled.div`
  .custom-card{
    padding:40px;
    border: 1px solid transparent;
    border-radius: 12px;
    &:hover{
      border: 1px solid #2B7BB9;
      .custom-round-img {
        border: 2px solid #2B7BB9;
      } 
    }
    }
  .imageCenter {
    text-align: center;
  }
  .imageCenter .custom-round-img {
    width: 146px;
    height: 146px;
    border: 2px solid #D1D0D6;
    border-radius:50%;
  }
  .card {
    padding: 20px;
    border: 1px solid #d1d0d6;
    border-radius: 12px;
  }
  .card-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #3b3a40;
    margin:10px 0;
  }
  .card-text {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #8E8C95;
  }
  .card-text img{
    margin-right:8px;
  }
  .main-heading {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.8px;
    color: #000000;
  }
`;

export { ValueWrapper };

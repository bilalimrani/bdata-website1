import styled from "styled-components";
import group_1668 from "public/img/linePattern.png";
import bg_pattern from "public/img/imageas.png";

const ContactWrapper = styled.div`
  background-image: url(${group_1668}), url(${bg_pattern});
  background-repeat: no-repeat;
  background-size: 300px, 125px 310px;
  background-position: bottom right, top right;
  @media (max-width: 1199px) {
    background-size: 200px, 50px 150px;
  }
  @media (max-width: 991px) {
    background: none;
  }
  .form {
    margin: 0 !important;
    padding: 50px 0;
  }
  .custom-container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .form-control {
    border: 1px solid #a7afc1;
    border-radius: 8px;
    height: 53px;
  }
  input[type="text"]:focus {
    border: 1px solid #2f7dba;
    border-radius: 8px;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.259387px;
    color: #373737;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  input[type="text"] {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #373737;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5e6471;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .form-check-label {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #052460;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .form-check-input {
    min-width: 16px;
  }
  .form-check-input:checked {
    background-color: #00b0df;
    border-color: #00b0df;
  }
  textarea {
    height: 148px !important;
  }
  .btnGroup {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 575px) {
      flex-direction: column;
    }
  }
  .btnGroup button {
    margin: 10px 0;
    min-width: 200px;
  }
`;
const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;
  &:hover {
    background-color: #004d88 !important;
    color: white;
  }
`;

export { ContactWrapper, Button };

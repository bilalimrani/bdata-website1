import styled from "styled-components";
import bg_pattern from "public/img/imageas.png";

const SectionWrapper = styled.div`
  margin-top: 10px;
  background-image: url(${bg_pattern});
  background-repeat: no-repeat;
  background-size: 110px;
  background-position: top 92px right 0px;
  position: relative;
  left: 15px;
  @media (max-width: 1199px) {
    background-size: 200px;
    position: relative;
    left: 0px;
  }
  @media (max-width: 991px) {
    background: none;
    position: relative;
    left: 0px;
  }
  .form {
    margin-left: 150px;
    margin-right: 150px;
  }
  @media (max-width: 991px) {
    .form {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  @media (max-width: 767px) {
    .form {
      margin-left: 10px;
      margin-right: 10px;
    }
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
  }
  input[type="text"] {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.259387px;
    color: #373737;
  }
  p {
    /* Paragraph Regular 16 */

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: -0.259387px;

    /* #5E6471 */

    color: #5e6471;

    mix-blend-mode: normal;
  }
  .form-check-label {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.4px;

    /* #052460 */

    color: #052460;

    mix-blend-mode: normal;
  }
  .form-check-input:checked {
    background-color: #00b0df;
    border-color: #00b0df;
  }
  textarea {
    height: 148px !important;
  }
  .unsubscribe {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.4px;
    color: #5e6471;
    mix-blend-mode: normal;
  }
  .btn {
    background: #fff;
    border: 1px solid #004d88;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #004d88;
    padding: 16px 32px;
    gap: 10px;
    width: 174px;
    height: 50px;
    box-shadow:none;
  };
  .heading {
    font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
/* identical to box height */

text-align: center;
letter-spacing: 0.8px;

color: #000000;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 120px;
margin-right: 120px;
  };
  .btnGroup{
    display: flex;
    gap: 30px;
  }
`;
const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;

  &:hover {
    color:white;
    background-color: #004d88 !important;
  }
`;

export { SectionWrapper,Button };

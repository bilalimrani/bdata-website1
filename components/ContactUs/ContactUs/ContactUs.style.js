import styled from "styled-components";
const bgImage = require("public/img/linePattern.png");
import bg_pattern from "public/img/imageas.png";

const ContactWrapper = styled.div`
  background-image: url(${group_1668});
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: bottom right;
  @media (max-width: 1199px) {
    background-size: 200px;
  }
  @media (max-width: 991px) {
    background: none;
  }
.form {
    margin-left: 220px;
    margin-right: 220px;
};
@media (max-width: 991px) {
    .form {
        margin-left: 10px;
        margin-right: 10px;
    };
  };
  @media (max-width: 767px) {
    .form {
        margin-left: 10px;
        margin-right: 10px;
    };
  };
.form-control {
    border: 1px solid #A7AFC1;
border-radius: 8px;
height: 53px;
};
input[type=text]:focus {
    border: 1px solid #2F7DBA;
    border-radius: 8px;
};
label {
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.259387px;
color: #373737;
};
input[type=text]{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.259387px;
color: #373737;
};
p {
    /* Paragraph Regular 16 */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */
letter-spacing: -0.259387px;
/* #5E6471 */
color: #5E6471;
mix-blend-mode: normal;
};
.form-check-label{
font-style: italic;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.4px;
/* #052460 */
color: #052460;
mix-blend-mode: normal;
};
.form-check-input:checked {
    background-color: #00B0DF;
    border-color: #00B0DF;
};
textarea {
    height: 148px!important;
};
.unsubscribe {
font-style: italic;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.4px;
color: #5E6471;
mix-blend-mode: normal;
};
.btn {
    background: #fff;
    border: 1px solid #004D88;
border-radius: 8px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: #004D88;
padding: 16px 32px;
gap: 10px;
width: 150px;
height: 36px;
};
.btnGroup {
    display:flex;
    gap: 30px;
};
`;

const InfoArea = styled.section`
  position: relative;
  /* background-image: url(${bgImage}); */
  background-position: top 300px right -25px;
  background-repeat: no-repeat;
  background-size: 370px 300px;
  @media (max-width: 1199px) {
    background-size: 300px 300px;
  }
  @media (max-width: 991) {
    background-size: 250px 250px;
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
const CalendlyWrapper = styled.div`
    width:100%;
    padding:20px;
    text-align:center;
    border: 1px solid #A7AFC1;
    border-radius: 8px;
    img{
      max-width:200px;
      margin-bottom:30px;
    }
`;
const CalendlyWrapperInner = styled.div`
min-height:100px;
`;
export { ContactWrapper, Button, InfoArea ,CalendlyWrapper, CalendlyWrapperInner };

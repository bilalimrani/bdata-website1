import styled from "styled-components";
import sideimg from "public/img/imageas.png";

const ContactWrapper = styled.div`
background-color: black;
padding: 50px 0;
background-image: url(${sideimg});
background-repeat: no-repeat;
background-size: 136px 330px;
background-position: center right;
@media (max-width: 1378px) {
    background-size: 80px 200px;
   };
@media (max-width: 1199px) {
   background-image:none !important;
  };
.custom-container{
    max-width:1040px;
    margin:0 auto;
    padding:0 20px;
}
form{
    margin:0 !imoortant;
}
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
  .custom-checkbox-input-wrapper{
    display:flex;
    align-items:center;
    justify-content:flex-start;
  }
.form-control {
    border: 1px solid #A7AFC1;
border-radius: 8px;
background: #000000;
color: #fff;
};
input[type=text]:focus {
    border: 1px solid #2F7DBA;
    border-radius: 8px;
};
input[type=text], select{
    background: #000000;
color: #fff;
};
label {
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #fff;
};
input[type=text]{
font-style: normal;
border-radius: 8px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.259387px;
color: #fff;
};
p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
};
.form-check-label{
// font-style: italic;
font-weight: 500;
font-size: 14px;
color: #fff;
};
.form-check-input:checked {
    background-color: #00B0DF;
    border-color: #00B0DF;
};
textarea {
    height: 148px!important;
};
.unsubscribe {
font-size: 14px;
color: #fff;
margin:5px 0;
};
textarea{
    font-style: normal;
border-radius: 8px;
font-weight: 400;
font-size: 16px;
color: #373737;
box-shadow:none !important;
outline:none !important;
}
textarea:focus {
    border: 1px solid #2F7DBA; 
};

.heading{
    font-style: normal;
font-weight: 700;
font-size: 28px;
color: #FFFFFF;
margin-bottom: 30px;
}
`;
const Button = styled.button`
background: transparent;
border: 1px solid white;
color: white;
font-style: normal;
font-weight: 400;
font-size: 16px;
padding: 14px 32px;
transition: 0.3s ease;
  &:hover{
    color: #004d88;
    border:1px solid transparent;
  }
`;

export { ContactWrapper, Button };

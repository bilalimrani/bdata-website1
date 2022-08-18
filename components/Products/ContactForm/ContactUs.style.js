import styled from "styled-components";
import group_1668 from "public/img/imageas.png";

const ContactWrapper = styled.div`
background-color: black;
padding-top: 50px;
.form {
    margin-left: 200px;
    margin-right: 200px;
};
form{
    margin-bottom: 0px!important;
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
background: #000000;
color: #fff;
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
color: #fff;
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
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;    
    letter-spacing: -0.259387px;
    color: #FFFFFF;
    mix-blend-mode: normal;
};
.form-check-label{
font-style: italic;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.4px;

/* #052460 */

color: #fff;

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
font-size: 16px;
line-height: 19px;
letter-spacing: 0.4px;
color: #fff;
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
width: 200px;
height: 53px;
};
.btnGroup {
    display:flex;
    gap: 30px;

};
.group_1668 {
    content: url(${group_1668});
    position: absolute;
    right: 0;
    top: 600%;
    transform: translateY(-50%);
    width: 110px;
    height: 315px;
    @media (max-width: 991px) {
      width: 75px;
      height: 215px;
      right: 58px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  };
.heading{
    font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 58px;
/* identical to box height */

letter-spacing: 0.8px;

color: #FFFFFF;
margin-bottom: 30px;
}
`;

export { ContactWrapper };

import styled from "styled-components";
import bg_pattern from "public/img/imageas.png";

const SectionWrapper = styled.div`
  background-image: url(${bg_pattern});
  background-repeat: no-repeat;
  background-size: 110px;
  background-position: center right;
  position: relative;
  .custom-body-wrapper{
    padding:30px 150px 30px 15px;
    @media (max-width: 991px) {
     padding:30px 15px;
    }
  }

  @media (max-width: 1199px) {
    // background-size: 200px;
    position: relative;
  }
  @media (max-width: 991px) {
    background: none;
    position: relative;
    left: 0px;
  }
  .form {
    margin:0 0 0 0;
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
    color: #373737;
  }
  input[type="text"] {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #373737;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5e6471;
  }
  .form-check-label {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.4px;
    color: #052460;
    mix-blend-mode: normal;
  }
  .form-check-input{
    min-width:16px;
  }
  .form-check-input:checked {
    background-color: #052460;
    border-color: #052460;
  }
  textarea {
    height: 148px !important;
  }
  .unsubscribe {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #5e6471;
    mix-blend-mode: normal;
  }
  .btn {
    background: #fff;
    border: 1px solid #004d88;
    border-radius: 8px;
    color: #004d88;
    padding: 8px 24px;
    min-width:150px;
    box-shadow:none;
  };
  .heading {
    font-style: normal;
font-weight: 700;
font-size: 28px;
text-align: left;
color: #000000;
margin-top: 20px;
margin-bottom: 20px;
  };
  .custom-modal-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:15px;
    border-bottom:1px solid #ccc;
    
  }
  .custom-modal-header h2{
    padding-right:30px;
    @media (max-width: 991px) {
     font-size:22px;
     }
     @media (max-width: 767px) {
      font-size:18px;
      padding-right:40px;
      }
  }
  .custom-modal-header button{
    background:transparent;
    border:1px solid transparent;
    width:32px;
    height:32px;
    border-radius:50%;
    position:absolute;
    right:15px;
    top:24px;
  }
  .custom-modal-header button:hover{
    background:#ccc;
  }
  .btnGroup{
    display: flex;
    justify-content:flex-end;
    padding:15px;
    border-top:1px solid #ccc;
    @media (max-width: 767px) {
      flex-direction:column;
      }
  }
  .btnGroup .btn-block{
    @media (max-width: 479px) {
      margin:0 0 15px !important;
      }
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

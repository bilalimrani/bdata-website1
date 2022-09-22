import styled from "styled-components";

const CookieContainer = styled.div`
   .CookieConsent{
    background:white !important;
    color:black !important;
   }
   .custom-flex{
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .custom-flex p{
      max-width:60%;
    }
    #rcc-confirm-button{
      display:none;
    }
`;

const ModalWrapper = styled.div`
.custom-modal-header{
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:15px;
   border-bottom:1px solid #ccc;
   
 }
 .custom-modal-header h4{  
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
   display:flex;
   align-items:center;
   justify-content:center;
 }
 .custom-modal-header button svg{
   width:30px;
   height:30px;
 }
 .custom-modal-header button:hover{
   background:#ccc;
 }
 .transparent-btn{
   background:transparent;
   border:none;
   font-size:13px;
 }
 .para-clamp{
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;  
   overflow: hidden;
 }
 .btnGroup{
   display:flex;
   align-items:center;
   justify-content:flex-end;
   margin-top:10px;
 }

`
const MainWrapperAccordian = styled.div`
.checkboxwrapper .form-check{
   display: flex;
   align-items: center;
   padding: 0;  
}
.checkboxwrapper .form-check .form-check-label{
   margin-right:10px;
}
.checkboxwrapper .form-check-input{
   margin:0;
}
.accordian-btn {
   button {
     padding: 8px 16px;
   }
 }
 .timer-counter{
   line-height:initial;
 }
 .header-wrapper {
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   h2 {
     margin: 0 0 0 10px;
     font-weight: 700;
     @media (max-width: 575px) {
       font-size: 18px;
     }
   }
   h4{
      margin:0;
   }
   p {
     margin: 0;
     padding-right: 20px;
   }
 }
 .left-align-text {
   display: flex;
   align-items: center;
   justify-content: center;
   h4 {
     margin-left: 8px;
   }
 }
 .accordian-body-wrapper {
   .accordian-body-header {
     .job-details {
       display: flex;
       align-items: center;
       justify-content: flex-start;
       border-bottom: 1px solid #ccc;
       padding-bottom: 10px;
       @media (max-width: 575px) {
         flex-direction: column;
         align-items: flex-start;
       }
       .job-details-list {
         display: flex;
         align-items: center;
         justify-content: center;
         margin-left: 20px;
         @media (max-width: 575px) {
           margin: 0 0 10px;
         }
         &:nth-child(1) {
           margin-left: 0;
         }
         p {
           margin: 0 0 0 10px;
         }
       }
     }
   }

 }

`

const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 5px 20px;

  &:hover {
    color:white;
    background-color: #004d88 !important;
  }
`;


export {CookieContainer , ModalWrapper , MainWrapperAccordian  ,Button};
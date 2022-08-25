import styled from "styled-components";
// import BannerImage from "public/img/aboutus.png";
// import bdataPattern from "public/img/right-logo.svg";
import bg_pattern from "public/img/imageas.png";

const ValueWrapper = styled.div`
padding:25px 0;
background-image:  url(${bg_pattern});
background-repeat: no-repeat;
background-size:105px  290px;
background-position:  right center;
@media (max-width: 1199px) {
    background-size:  50px  150px;
  }
  @media (max-width: 991px) {
   background:none;
  }
  @media (max-width: 767px) {
    margin:15px 0;
  }
`;
const ValuesWrapperCard = styled.div`
padding:40px;
border: 1px solid transparent;
&:hover{
    border: 1px solid #D1D0D6;
// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 12px;
}
`;

const ShapeWrapper = styled.div`
width:64px;
height:64px;
border-radius:50%;
background:#D1E8FF;
display:flex;
align-items:center;
justify-content:center;
`;

export   {ValueWrapper ,ValuesWrapperCard, ShapeWrapper} ;

import styled from "styled-components";
// import BannerImage from "public/img/aboutus.png";
// import bdataPattern from "public/img/right-logo.svg";

const ValueWrapper = styled.div`
padding:25px 0;
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

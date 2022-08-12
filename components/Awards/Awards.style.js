import styled from "styled-components";

const AwardsContainer = styled.div`
    padding:50px 0 100px;
`;
const CarouselWrapper = styled.div`
padding:30px;
text-align:center;
border: 1px solid transparent;
img{
    box-shadow:none !important;
}
&:hover{
    border: 1px solid #D1D0D6;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 12px;
}
`;

export  {AwardsContainer,CarouselWrapper};
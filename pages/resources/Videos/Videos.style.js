import styled from "styled-components";

const PaperWraper = styled.div`
  
`;
const CardWrapper = styled.div`
> div{
    width:100%;
    height:100%;
    max-width:250px !important;
}
> div > div{
    display:none !important;
}
img{
    position:unset !important;
    left:unset !important;
    top:unset !important;
    right:unset !important;
    bottom:unset !important;
    width:100% !important;
    height:100% !important;
    max-height:300px !important;
   
}
iframe{
    max-width:350px;
}

@media (max-width: 767px) {
    text-align:center;
      }

`; 
const Button = styled.button`
border:1px solid #2B7BB9;
background: transparent;
border-radius: 8px;
padding:16px 28px;
font-size:16px;
font-weight:400;
color:#2B7BB9;
transition:.3s ease;
&:hover{
background:#2B7BB9;
border:1px solid transparent;
color:white;
}
`;
const SectionPadding = styled.div`
padding:0 0 50px;
`
export {PaperWraper , CardWrapper,Button ,SectionPadding};


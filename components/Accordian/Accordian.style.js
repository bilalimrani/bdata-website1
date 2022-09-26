import styled from "styled-components";

const HeaderWrapper = styled.div`
.header-wrapper-inner{
    padding:15px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .left-align-text{
        display:flex;
    align-items:center;
    justify-content:center;
    h2{
        margin:0 0 0 10px;
        font-weight:900;

    }
    }
   
}
`
const MainWrapperAccordian = styled.div`
&:hover{
    cursor:pointer;
    box-shadow: 1px 2px 10px -4px rgba(0,0,0,0.75);
}
`

export { HeaderWrapper,MainWrapperAccordian  };


import styled from "styled-components";

const AllResourcesWrapper = styled.div`
  padding:36px 0;
  .nav.nav-tabs {
    border:none;
    justify-content:center;
  }
  .nav.nav-tabs button{
    border:1px solid #004D88;
    font-size:16px;
    color:#004D88;
    border-radius:8px;
    margin: 14px; 
    // box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
  }
  .nav.nav-tabs .active{
    background: #2B7BB9;
    color:white;
    border:1px solid transparent;
  }
  .custom-padding{
    padding-bottom:30px;
  }
`;
const SectionPadding = styled.div`
padding:50px 0;
`
export {AllResourcesWrapper ,SectionPadding};

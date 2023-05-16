import styled from "styled-components";

const AllResourcesWrapper = styled.div`
  h6 {
    /* font-size:28px; */
    font-weight: 700;
    text-align: center;
    @media (max-width: 1199px) {
      /* font-size: 24px; */
    }
    @media (max-width: 767px) {
      /* font-size:20px; */
    }
  }
  h3 {
    /* font-size:28px; */
    font-weight: 700;
    text-align: center;
  }
  padding: 36px 0;
  .nav.nav-tabs {
    border: none;
    justify-content: center;
  }
  .nav.nav-tabs button {
    border: 1px solid #004d88;
    font-size: 16px;
    color: #004d88;
    border-radius: 8px;
    margin: 14px;
    // box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
  }
  .nav.nav-tabs .active {
    background: #2b7bb9;
    /* color: white; */
    /* border: 1px solid transparent; */
  }
  .custom-padding {
    padding-bottom: 30px;
  }
`;
const SectionPadding = styled.div`
  padding: 50px 0;
`;
export { AllResourcesWrapper, SectionPadding };

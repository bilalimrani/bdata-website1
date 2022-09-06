import styled from "styled-components";

const PaperWraper = styled.div``;
const CardWrapper = styled.div`
  > div {
    width: 100%;
    height: 100%;
    max-width: 250px !important;
  }
  > div > div {
    display: none !important;
  }
  img {
    position: unset !important;
    left: unset !important;
    top: unset !important;
    right: unset !important;
    bottom: unset !important;
    width: 100% !important;
    height: 100% !important;
    max-height: 300px !important;
  }
  .heading {
    white-space: nowrap;
    overflow: hidden;
    /* text-overflow: ellipsis; */
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 60px;

  &:hover {
    background-color: #004d88 !important;
  }
`;
const SectionPadding = styled.div`
  padding: 0 0 30px;
`;
export { PaperWraper, CardWrapper, Button, SectionPadding };

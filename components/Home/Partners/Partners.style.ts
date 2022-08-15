import styled from "styled-components";

const PartnersContainer = styled.div`
  h2 {
    padding-bottom: 80px;
  }
  img {
    margin-bottom: 50px;
  }
`;

const ImageSection = styled.div`
  cursor: pointer;
  text-align: center;
  &:hover {
    border: 1px solid #d1d0d6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
  }
`;

export { PartnersContainer, ImageSection };

import styled from "styled-components";
const bdataPattern = require("public/img/pattern-img.svg");

const PartnerSection = styled.div`
background-image: url(${bdataPattern});
background-position:center right;
background-repeat: no-repeat;
background-size: 100px 300px;
@media (max-width: 1378px) {
  background-size: 60px 200px;
}
@media (max-width: 1199px) {
  background-size: 40px 160px;
}
`;

const PartnersContainer = styled.div`
  h3 {
    font-size:28px;
    padding-bottom: 30px;
    @media (max-width: 991px) {
      padding-bottom: 15px;
    }
  }
  img {
    margin-bottom: 50px;
  }
`;

const ImageSection = styled.div`
  cursor: pointer;
  text-align: center;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #d1d0d6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
  }
`;

export { PartnersContainer, ImageSection ,PartnerSection};

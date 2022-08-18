import styled from "styled-components";

const ProductWrapper = styled.div`
margin-bottom: 50px;
.row{
  margin-top:50px;

  grid-auto-flow: column;
  gap: 50px;
  align-items: center;
  justify-items: center;
};
.heading {
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 58px;
  letter-spacing: 0.8px;
  color: #000000;
};
p {
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 140% */

letter-spacing: 0.18px;

color: #3B3A40;
};
.card-image-center{
  width: 491px;
    height: 307px;
};
@media (max-width: 767px) {
  .card-image-center{
    width: 360px;
      height: 250px;
  };
  .col-reverse{
    flex-direction: column-reverse!important
  }
};
ul {
  margin-left:15px;
};
ul li {
  list-style-type: disc;
};
li::marker{
  width: 15px;
height: 15px;
background: #004D88;
}
`;

export { ProductWrapper };

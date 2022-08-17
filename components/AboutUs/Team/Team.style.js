import styled from "styled-components";

const ValueWrapper = styled.div`
margin-bottom: 50px;
.row {
  margin-left: 50px;
  margin-right: 50px;
};
@media (max-width: 991px) {
  .row{
    margin-left:30px;
    margin-right:30px;
  };
};
@media (max-width: 767px) {
  .row{
    margin-left:10px;
    margin-right:10px;
  };
};
.imageCenter {
  text-align: center;
}
.imageCenter>img{
  width: 100px;
  height: 100px;
};
.card{
  padding: 20px;
  border: 1px solid #D1D0D6;
border-radius: 12px;
};
.card-title {
font-family: 'Aileron';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: center;
letter-spacing: -0.259387px;
color: #3B3A40;
};
.card-text {
  font-family: 'Aileron';
font-style: italic;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 0.4px;
color: #8E8C95;
};
.main-heading {
font-family: 'Aileron';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;
text-align: center;
letter-spacing: 0.8px;
color: #000000;
}
`;

export { ValueWrapper };

import styled from "styled-components";

const ValueWrapper = styled.div`
margin-bottom: 50px;
.row{
  margin-left:50px;
  margin-right:50px
  display: grid;
  grid-auto-flow: column;
  gap: 50px;
  align-items: center;
  justify-items: center;
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
.icon{
  background: #D1E8FF;
  border-radius: 48.5px;
  width: 50px;
  height: 50px;
};
.icon>div{
  position: absolute;
    left: 10px;
    top: 10px;
}
.col-sm{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
}
.col-sm:hover{
  border: 1px solid #D1D0D6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
}
.heading {
  font-family: 'Aileron';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 60px;
letter-spacing: -0.259387px;
color: #3B3A40;
};
p{
  font-family: 'Aileron';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

letter-spacing: -0.259387px;

color: #64626A;
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

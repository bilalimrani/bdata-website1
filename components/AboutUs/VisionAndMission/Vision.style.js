import styled from "styled-components";
import slidersmall from "public/img/slidersmall.png";

const VisionWrapper = styled.div`
margin-bottom:50px;
background: #FFFFFF;
border: 1px solid #D1D0D6;
border-radius: 12px;
.row {
    margin-top: 50px;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
};
.image{
    width: 525px;
height: 384px;
    background-image: url(${slidersmall});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
};
.mission{
    font-family: 'Aileron';
    font-style: normal;
    line-height: 10px;
    position: relative;
    left: 60px;
};
.vision{
    font-family: 'Aileron';
    font-style: normal;
    line-height: 10px;
    position: relative;
    left: 60px;
    top: 80px;
};
.heading {
    font-family: 'Aileron';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
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
  h3{
    font-size:28px;
    margin:0 0 10px;
  }
`;

export { VisionWrapper };

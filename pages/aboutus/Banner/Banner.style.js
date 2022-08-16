import styled from "styled-components";
import BannerImage from "public/img/aboutus.png";
import bdataPattern from "public/img/right-logo.svg";

const BannerWrapper = styled.div`
height: 700px;
// background-color:black;
background-image: url(${BannerImage});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom right;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
position: relative;
@media (max-width: 1199px){
  background-position:bottom right -200px;
}
@media (max-width: 991px) {
  height: 450px;
}
@media (max-width: 767px) {
  height: 300px;
}
.banner-content-wrapper{
  text-align:left;
}
&::before {
  content: url(${bdataPattern});
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 90px;
  height: 315px;
  @media (max-width: 991px) {
    width: 75px;
    height: 215px;
  }
  @media (max-width: 767px) {
    display: none;
  }
}
`;
export { BannerWrapper };

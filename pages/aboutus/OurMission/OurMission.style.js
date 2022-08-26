import styled from "styled-components";
// import BannerImage from "public/img/aboutus.png";
// import bdataPattern from "public/img/right-logo.svg";

const MissionWrapper = styled.div`
  // border: 1px solid #d1d0d6;
  border-radius: 12px;
  // padding: 15px;
  margin: 50px 0;
  @media (max-width: 992px) {
    margin: 25px 0;
    }  
  .img-Wrapper {
    > div {
      width: 100% !important;
    }
    img{
      @media (max-width: 1379px) {
        height:350px;
        }  
        @media (max-width: 992px) {
          height:250px;
          }  
          @media (max-width: 767px) {
            height:350px;
            }  
    }
    
  }
  .head-wrapper{
    @media (max-width: 767px) {
      margin:25px 0;
    }
    // @media (max-width: 1199px) {
    //   padding-top:50px;
    //   }
  }
  h3{
    font-size:28px;
    margin:0 0 10px;
  }
`;
export default MissionWrapper;

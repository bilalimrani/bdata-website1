import styled from "styled-components";
import bdataPattern from "public/img/right-logo.svg";

const Partners = styled.div`
  height: 600px;
  // background-color:black;
  background-image:  url(${bdataPattern});
  background-repeat: no-repeat;
  background-size:  140px 300px;
  background-position:  bottom left -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media (max-width: 1199px) {
    background-size:100px 200px;
    height:500px;
  }
  @media (max-width: 992px) {
    background-image:none;
    height:auto;
    padding:40px;
    background-color:black;
  }
  .custom-mobile-wrapper{
    @media (max-width: 992px) {
        width:100%;
       
        
    }
  }
 
  h2 {
    @media (max-width: 992px) {
      color: white;
    }
  }
  > div {
    height: 100%;
   padding-top:50px;
   @media (max-width: 1199px) {
    padding:0;
  }


  }
  .image-wrapper{
    @media (max-width: 992px) {
        display:none;
    }
  }
  @media (max-width: 768px) {
    height:auto;
    background-image: none;
    background-color: black;
    color: white;
  }
  .image-wrapper > div{
    width:100%;
  }
  .banner-content-wrapper{
    max-width:400px;
    margin-left:130px;
    text-align:left;
    height: 100%;
    align-items: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1199px) {
        margin-left:80px;
      }
      @media (max-width: 991px) {
        margin-left:0;
        max-width:100%;
      }
    p{
      font-size:16px;
      @media (max-width: 991px) {
        color:white;
      }
    }ss
  }
`;

const Button = styled.button`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 5px 20px;
  margin:0;

  &:hover {
    color:white;
    background-color: #004d88 !important;
  }
`;

export { Partners,Button };

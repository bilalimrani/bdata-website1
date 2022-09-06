import styled from "styled-components";
// import bdataPattern from "public/img/bannerSidebar.png";

const BannerWrapper = styled.div`
  height: auto;
  display: flex;
  background: black;
  position:relative;
  padding-bottom:0;
   align-items: center;
  justify-content: center;
  text-align: center;
  // @media (max-width: 1700px) {
  //   height: 615px;
  // }
  // @media (max-width: 1530px) {
  //   height: 560px;
  // }
  // @media (max-width: 1378px) {
  //   height: 485px;
  // }
  // @media (max-width: 1199px) {
  //   height: 400px;
  // }
  // @media (max-width: 991px) {
  //   height: 310px;
  // }
  // @media (max-width: 767px) {
  //   height: 235px;
  // }
  // @media (max-width: 575px) {
  //   height: 195px;
  // }
  // @media (max-width: 479px) {
  //   height: 130px;
  // }
  
  a{
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: 30px;
    z-index: 1;
  
    
  }
  video {
    /* object-fit: cover; */
    /* position: absolute; */
    width: 100%;
    height: 100%;
    /* position: absolute; */
    z-index: 1;
  }
  .videoBack {
  }
 

  &::before {
    /* content: ${(props) => props?.sideImage && `url(${bdataPattern})`}; */
    // position: absolute;
    // right: 0;
    // top: 50%;
    // transform: translateY(-50%);
    width: 135px;
    height: 315px;
    @media (max-width: 991px) {
      width: 75px;
      height: 215px;
      right: 58px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .banner-content-wrapper {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    z-index: 111;
    text-align:center;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
  }
  h2 {
    max-width:400px;
    color: white;
    font-weight: 900 !important;
    margin: 0 0 28px !important;
    animation: slide-up 2s;
  }
  @keyframes slide-up {
    from {
      transform: translateY(30px);
        opacity:0.2;
        // line-height:200px;
    }
    to {
      opacity:1;
      // line-height:32px;
      transform: translateY(0);
  }
  p {
    color: white;
    margin: 0 0 50px !important;
  }
  // .custom-btn-white {
  //   background: white;
  //   padding: 18px 40px;
  //   font-size: 16px;
  //   color: #004d88;
  //   box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
  //   border-radius: 8px;
  // }
`;

const A = styled.a`
  background: white;
  border: 1px solid white;
  color:  #004D88;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 32px;
  border-radius:8px;
  transition: 0.3s ease;
  @media (max-width: 767px) {
    padding: 8px 24px;
    font-size:14px;
  }
  @media (max-width: 480px) {
    padding: 6px 20px;
    font-size:12px;
  }
  &:hover {
    background:transparent;
    border:1px solid white;
    color: white;
  }
`;

export { BannerWrapper, A };
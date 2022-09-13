import styled from "styled-components";
// import bdataPattern from "public/img/bannerSidebar.png";

const BannerWrapper = styled.div`
  height: auto;
  background: transparent;
  position:relative;
  padding-bottom:0;
  text-align: center;
  
  a{
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: 50px;
    z-index: 1;
    @media (max-width: 479px) {
      bottom: 15px;
    }
  }
  video {
    /* object-fit: cover; */
    /* position: absolute; */
    width: 100%;
    height: 100%;
    position:relative;
    z-index: 0;
  }
  .custom-container{
    max-width:550px;
    margin:0 auto;
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
    p{
      font-size:16px;
    }
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
  background: transparent;
  border: 1px solid white;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 32px;
  border-radius: 8px;
  transition: 0.3s ease;
  @media (max-width: 767px) {
    padding: 8px 24px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 4px 16px;
    font-size: 10px;
  }
  &:hover {
    background: white;
    border: 1px solid white;
    color: #004d88;
  }
`;

const FirstVideoOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 700px;
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 991px) {
    top: 10%;
    padding: 0 140px !important;
  }
  @media (max-width: 575px) {
    padding: 0 100px !important;
  }

  @media (max-width: 479px) {
    padding: 0 50px !important;
    top: 5%;
  }

  h2 {
    color: white;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.8px;
    width: 100%;
    margin: 0 !important;
    max-width: 100%;
    text-transform: inherit !important;
    @media (max-width: 991px) {
      font-size: 32px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      line-height: normal;
    }
  }
  h2 span {
    font-weight: 700;
  }
`;

const SecondVideoOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 900px;
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 991px) {
    top: 10%;
    padding: 0 80px !important;
  }
  @media (max-width: 575px) {
    padding: 0 50px !important;
  }

  @media (max-width: 479px) {
    padding: 0 50px !important;
    top: 5%;
  }
  h2 {
    color: white;
    font-weight: 900;
    line-height: 43px;
    letter-spacing: 0.8px;
    width: 100%;
    margin: 0 !important;
    max-width: 100%;
    text-transform: inherit !important;
    @media (max-width: 991px) {
      font-size: 32px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      line-height: normal;
    }
  }
  h3 {
    color: white;
    font-weight: 900;
    line-height: 43px;
    letter-spacing: 0.8px;
    width: 100%;
    margin: 0 !important;
    max-width: 100%;
    text-transform: inherit !important;
    @media (max-width: 991px) {
      font-size: 32px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: normal;
    }
  }
  h2 span {
    font-weight: 700;
  }
`;

const ThirdVideoOverlay = styled.div`
  display: flex;
  justify-content: center !important;
  position: absolute;
  top: 20%;
  left: 0;
  padding: 0 120px;
  @media (max-width: 1199px) {
    top: 10%;
    max-width: 800px;
  }
  @media (max-width: 991px) {
    padding: 0 50px !important;
  }
  @media (max-width: 575px) {
    padding: 0 80px !important;
  }

  @media (max-width: 479px) {
    padding: 0 50px !important;
    top: 5%;
  }

  h2 {
    color: white;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.8px;
    text-align: left !important;
    text-transform: inherit !important;
    @media (max-width: 991px) {
      font-size: 32px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      line-height: normal;
    }
  }
  h2 span {
    font-weight: 700;
  }
  ul {
    text-align: left;
    color: white;
    padding: 15px 0;
    @media (max-width: 991px) {
      padding: 5px 0;
      margin: 0;
    }
  }
  ul li {
    position: relative;
    font-size: 16px;
    padding-left: 10px;
    @media (max-width: 1199px) {
      font-size: 14px;
    }
    @media (max-width: 991px) {
      font-size: 12px;
    }
  }
  ul li::before {
    content: "";
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
  }
`;

export {
  BannerWrapper,
  A,
  FirstVideoOverlay,
  SecondVideoOverlay,
  ThirdVideoOverlay,
};

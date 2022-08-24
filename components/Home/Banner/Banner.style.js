import styled from "styled-components";
// import bdataPattern from "public/img/bannerSidebar.png";

const BannerWrapper = styled.div`
  height: 660px;
  display: flex;
  background: black;
  position:relative;
  padding-bottom:60px;
  a{
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: 90px;
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
  /* align-items: center;
  justify-content: center;
  text-align: center;
  position: relative; */
  @media (max-width: 991px) {
    height: 450px;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  &::before {
    /* content: ${(props) => props?.sideImage && `url(${bdataPattern})`}; */
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
  }
  h2 {
    color: white;
    font-weight: 900 !important;
    margin: 0 0 28px !important;
  }
  p {
    color: white;
    margin: 0 0 50px !important;
  }
  .custom-btn-white {
    background: white;
    padding: 18px 40px;
    font-size: 16px;
    color: #004d88;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }
`;

const A = styled.a`
  background: white;
  border: 1px solid white;
  color:  #2a6ef2;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 32px;
  border-radius:30px;
  transition: 0.3s ease;
  &:hover {
    background:transparent;
    border:1px solid #2a6ef2;
    color: #2a6ef2;
  }
`;

export { BannerWrapper, A };

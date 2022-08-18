import styled from "styled-components";

const LoaderWrapper = styled.div`
 position:fixed;
 left:0;
 top:0;
 width:100%;
 height:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 background:rgba(0, 0, 0, 0.9);
 z-index:1000;
.loader {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    animation: animate 2s linear infinite;
  }
  
  .loader::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: #000;
    border-radius: 50%;
    z-index: 1000;
  }
  
  .loader::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    filter: blur(60px);
    z-index: 1;
  }
  
  @keyframes animate {
    0% {
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  
`;

export default  LoaderWrapper ;

import styled from "styled-components";
import BannerImage from "../../public/img/banner-bg.svg";
import bdataPattern from "../../public/img/bdata-logo.svg";

const BannerWrapper = styled.div`
    height:720px;
    background-image: url(${BannerImage});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:relative;
    &::before{
        content: url(${bdataPattern});
        position:absolute;
        right:0;
        top:50%;
        transform:translateY(-50%);
        width:135px;
        height:315px;
        // background:red;
    }
    .banner-content-wrapper{
        max-width: 680px;
        margin: 0 auto;
    }
    h2{
        color:white;
        font-weight:900 !important;
        margin:0 !important;
        margin-bottom:90px !important;        
    }
    .custom-btn-white{
        background:white;
        padding:18px 40px;
        font-size:  16px;
        color:#004D88;
        box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.12);
        border-radius:8px;
    }
`;

export { BannerWrapper };

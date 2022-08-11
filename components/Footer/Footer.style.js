import styled from "styled-components";

const FooterContainer = styled.div`
padding:70px 20px;
background:black;
color:white;
.logoWrapper{
    margin-bottom:50px;
}
.custom-round-img{
    width: 25px;
    height: 25px;
    display: inline-block;
    border-radius: 50%;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 8px;
    border:1px solid transparent;
    transition:.2s ease;
}
.custom-round-img{
    margin-left:0 !important;
}
.custom-round-img i{
    font-size:12px;
}
.socoalMediaLinks{
    display:flex;
    align-items:flex-start;
    justify-content:flex-start; 
}
.custom-round-img.twitter{
    background:#55ACEE;
}
.custom-round-img.twitter:hover{
    background:transparent;
    border:1px solid #55ACEE;
}
.custom-round-img.twitter:hover i{
    color: #55ACEE;
}
.custom-round-img.facebook{
    background:#3B5998;
}
.custom-round-img.facebook:hover{
    background:transparent;
    border:1px solid #3B5998;
}
.custom-round-img.facebook:hover i{
    color: #3B5998;
}
.custom-round-img.linkdin{
    background:#0976B4;
}
.custom-round-img.linkdin:hover{
    background:transparent;
    border:1px solid #0976B4;
}
.custom-round-img.linkdin:hover i{
    color: #0976B4;
}
.footer-links-ul li{
    padding:10px 0;
} 
.footer-links-ul li .footer-links{
    color:#64626A;
    font-size:14px;
    font-weight:400;
}
.footer-links-ul li .footer-links:hover{
    color:white;
}
`;

export  {FooterContainer};
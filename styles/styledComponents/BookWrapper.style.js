import styled from "styled-components";

const BookWrapper = styled.div`
    background:#F9F9F9;
    min-height:380px;
    width:100%;
    position:relative;
    border: 1px solid rgb(222 219 219);
    padding: 20px 15px;
    border-radius: 3px;
    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:80%;
        height:9px;
        background:#FFC412;
    }

    .custom-card-body{
        text-align:center;
        .card-body-inner-img{
            height:300px;
            display:flex;
            align-items:center;
            justify-content:center;
            
        }
        .card-title{
            p{
                font-size:16px;
                font-weight:700;
                text-align:center;
                color: #656262;
            }
        }
    }
`;

export default BookWrapper;

import styled from "styled-components";

const CookieContainer = styled.div`
    position:fixed;
    bottom:15px;
    left:50%;
    max-width:800px;
    transform:translateX(-50%);
    background:white;
    border-radius:30px;
    padding:15px;
    z-index:999;
    box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
    .btn-primary{
        border: 1px solid #004d88;
        color: #004d88;
        background: transparent;
        padding: 9px 40px;
        box-shadow: none !important;
        border-radius:5px;
        &:hover {
          background-color: #004d88 !important;
          color: white;
        }
    }
    .btn-secondary{
        border: 1px solid transparent;
        background: #004d88;
        color: white;
        padding: 9px 40px;
        box-shadow: none !important;
        border-radius:5px;
        &:hover {
            color: #004d88;
            background: transparent;
            border: 1px solid #004d88;
        }
    }
    .custom-flex-end{
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
`;

export default CookieContainer;
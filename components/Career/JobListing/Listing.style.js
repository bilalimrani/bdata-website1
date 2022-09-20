import styled from "styled-components";

const MainWrapperAccordian = styled.div`
    .header-wrapper{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;
        h2{
            margin:0 0 0 10px;
            font-weight:700;
            @media (max-width: 575px) {
                font-size:18px
               }
        }
        p{
            margin:0;
            padding-right:20px;
        }
    }
    .left-align-text{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .accordian-body-wrapper{
        .accordian-body-header{
            .job-details{
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    border-bottom:1px solid #ccc;
                    padding-bottom:10px;
                    @media (max-width: 575px) {
                       flex-direction:column;
                       align-items:flex-start;
                      }
                .job-details-list{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    margin-left:20px;
                    @media (max-width: 575px) {
                        margin:0 0 10px;
                       }
                    &:nth-child(1){
                        margin-left:0;
                    }
                    p{
                        margin:0 0 0 10px;
                    }
                }
            }
           
        }
        .qualification-wrapper{
            padding-top:10px;
            margin:0;
        }
        .apply-link{
            a{
                color:#5AAEDD;
            }
        }
    }
`
const ListWrapper = styled.div`
p{  
    margin:0;
    padding-left:15px;
    position:relative;
    &::before{
        content:'';
        position:absolute;
        left:0;
        top:50%;
        width:5px;
        height:5px;
        background:#3B3A40;
        border-radius:50%;
        transform:translateY(-50%);

    }
}
`

export  {MainWrapperAccordian,ListWrapper};


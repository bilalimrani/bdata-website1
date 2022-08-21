import styled from "styled-components";

const CustomerWrapper = styled.div`

padding:50px 0;
@media (max-width: 991px) {
  padding: 25px 0;
}
.custom-padding-subsection{
  font-size:28px;
  padding:0;
  margin:0;
}
.slick-track{
    display:flex;
    align-items:center;
    justify-content:center;
}
.slick-slide{
    margin:0 15px;
}
.slick-list{
    padding:50px !important;
    
@media (max-width: 991px) {
  padding: 25px !important;
}
}
.slick-dots{
    position:unset !important;
    bottom:unset !important;
    margin:20px 0 0 !important;
    
@media (max-width: 991px) {
  padding: 25px 0;
}
  }
  .slick-dots li button::before{
    content:none !important;
  }
  .slick-dots li button{
    width:36px !important;
    height: 6px !important;
    background:#E3E3E3 !important;

  }
  .slick-dots li{
    margin:0 5px;
    width:36px !important;
    height: 6px !important;
  }
  .slick-dots .slick-active button{
    background: #0976B4 !important;
  }
//   .slick-slide{
//     width:300px !important;
//   }
  .slick-center.slick-current {
    width:640px !important;
    @media (max-width: 991px) {
      width:320px !important;
    }
  }
  .slick-active.slick-current .small-text{
    font-size:16px;
  }
  .slick-center.slick-current .bottom-section{
    padding:18px 0;
  }
  .slick-center.slick-current .ProfileWrapper{
    padding:14px 50px;
  }
  .slick-center.slick-current .small-text.grey-clr{
    font-style:italic !important;
    padding-top:5px;
  }
  
  .img-wrapper{
    width:48px !important;
    height:48px !important;
    border-radius:50%;
  }
  .bottom-img-wrapper{
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding:5px 0 0;
  }
  .slick-center.slick-current .bottom-img-wrapper > div{
    width:150px !important;
    height:70px  !important;
  } 
  .slick-center.slick-current .bottom-img-wrapper .img-wrapper{
    width:150px !important;
    height:70px  !important;
  }
  
  `;
  const ProfileWrapper =styled.div`
  padding:14px 28px;
  background: #FFFFFF;
  box-shadow: 0px 22.8292px 65.2263px rgba(177, 177, 207, 0.3);
  border-radius: 10.4362px;
  .small-text {
      font-size:10px;
      line-height:18px !important;
  }
  .grey-clr{
      color: #A7AFC1;
  }
  .dark-grey{
      color: #848498;
  }
  .bottom-section{
      padding:5px 0;
  }
`

export {CustomerWrapper,ProfileWrapper} ;

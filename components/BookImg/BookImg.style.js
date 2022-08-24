import styled from "styled-components";


const BookImgWrapper = styled.div`
width:100%;
min-height: 400px;
background:#032054;
position:relative;
transform-origin: 0 0;
transform-style: preserve-3d;
transform: rotateY(0);
transition: all 500ms;
// &:after {
//     content: "";
//     position: absolute;
//     display: block;
//     top: 2px;
//     right: -4px;
//         background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAG0lEQVQIW2P8/////w8fPjAICAgwwGhGGggCAOYAMfLhHG5wAAAAAElFTkSuQmCC) repeat;
//     width: 0;
//     height: calc(100% - 3px);
//     transform: rotateY(25deg);
//     transform-origin: right;
//     transition: all 500ms;
//   }

&::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:50%;
    height:5px;
    background:#ffc412;
}
.header-area img{
    max-width:100px;
  
}
.header-area{
    padding:15px;
}
h6{
    padding-top:5px;
    color:white !important;
    margin:0 !important;
    text-transform: capitalize ;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2;
    -webkit-box-orient: vertical;
}
p{
    color: #ffc412 !important;
    padding: 5px 0 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1;
    -webkit-box-orient: vertical;
}
h6{
    font-size:16px;
}
p{
    font-size:14px;
}
// .img-area{
//     height:150px;
// }
.img-area img{
    height:210px;
}
.bottom-area{
    padding:14px;
    color: #ffc412 !important;
}
&:hover{
    transition-duration: 0.5s;
    box-shadow: 0px 7px 11px 14px rgb(0 0 0 / 24%);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
}
&:hover:after {
    width:4px;
    right: -10px;
    width: 10px;
  }
`

export default BookImgWrapper;
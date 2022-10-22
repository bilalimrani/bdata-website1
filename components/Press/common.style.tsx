import styled from "styled-components";
import bdataPattern from "public/img/imageas.png";

const Button = styled.a`
  border: 1px solid #004d88;
  color: #004d88;
  background: transparent;
  padding: 9px 40px;
  box-shadow: none !important;
  &:hover {
    background-color: #004d88 !important;
    color: white;
  }
`;

const FooterSection = styled.div`
  background-color: #2b7bb9;
  padding: 21px 67px;
  border-radius: 8px;
  margin: 20px 0px;
  text-align: center;
  .footer1 {
    color: white;
  }
  .footer2 {
    color: #e5eff7;
  }
  /* position: relative; */

  background-image: url(${bdataPattern});
  background-repeat: no-repeat;
  /* background-size: 110px; */
  background-position: center right;

  background-size: 50px;
  /* position: absolute; */
  right: 0;
  top: 0;
  /* transform: translateY(-50%); */

  @media (max-width: 991px) {
    background-size: 60px;
  }
`;

export { Button, FooterSection };

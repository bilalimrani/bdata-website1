import styled from "styled-components";

const IdentityAccess = styled.div`
    text-align: center;
    margin-top: 50px;
    img {
        margin: 50px auto;
        width: 100%;
        height: 100%;
        max-width:830px;

    }
    @media (max-width: 767px) {
      img {
        margin: 50px 0px;
        width: 90%;
    }
    }
`;

const IdentityBottom = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 100%;
    padding: 50px 0px;
    color: #fff;
  }
`;

export { IdentityAccess, IdentityBottom };

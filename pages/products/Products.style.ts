import styled from "styled-components";

const IdentityAccess = styled.div`
    text-align: center;
    margin-top: 50px;
    img {
        margin: 50px 0px;
        width: 80%
        height: 80%
    }
`;

const IdentityBottom = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 50%;
    padding: 60px 0px;
    color: #fff;
  }
`;

export { IdentityAccess, IdentityBottom };

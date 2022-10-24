import styled from "styled-components";

const ListItem = styled.div`
  .nav-link.active {
    background: #2b7bb9 !important;
  }
  .nav-link {
    border: 1px solid #2b7bb9 !important;
    margin: 7px 0px;
    color: #2b7bb9;
    text-align: center;
    &:hover {
      background: #2b7bb9 !important;
      color: white;
    }
  }
`;
export { ListItem };

import styled from "styled-components";

const NavContainer = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  .navbar-nav .nav-item {
    margin: 0 25px !important;
    @media (max-width: 1199px) {
      margin: 0 15px !important;
    }

    @media (max-width: 992px) {
      padding-bottom: 10px;
    }
  }
  .navbar-nav .nav-item a {
    padding: 0 !important;
    font-size: 16px !important;
    color: black;
    opacity: 1;
  }
  .navbar-nav .nav-item a:hover {
    cursor: pointer;
    color: #004d88 !important;
  }
  .navbar-nav .nav-item .active {
    color: #004d88 !important;
    font-weight: 700;
  }
`;
const NavbarLogo = styled.div`
  @media (max-width: 992px) {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
  }
`;

export { NavContainer, NavbarLogo };

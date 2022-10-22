import styled from "styled-components";

const NavbarWrapper = styled.div`
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  width: 100%;
  background: ${(props) => (props.isIncreaseHeight ? "white" : "black")};
  .navbar-toggler {
    border: 1px solid white;
    svg {
      color: white;
    }
  }
  .navbar-toggler i {
    color: white;
  }
  /* z-index: 999; */
`;
const NavContainer = styled.div`
  margin: 0px 15px !important;
  width: 100%;
  max-width: 100%;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  .navbar-nav .nav-item {
    margin: 0 20px !important;
    @media (max-width: 1199px) {
      margin: 0 15px !important;
    }

    @media (max-width: 992px) {
      padding-bottom: 10px;
    }
  }
  .navbar-nav .nav-item a {
    padding: 0 !important;
    font-size: 14px !important;
    color: ${(props) => (props.isIncreaseHeight ? "black" : "white")};
    opacity: 1;
    position: relative;
    text-transform: capitalize;
  }
  .navbar-nav .nav-item a:hover {
    cursor: pointer;
    font-weight: bold;
    color: #fff !important;
  }
  .navbar-nav .nav-item .active {
    /* color: #004d88 !important; */
    font-weight: bold;
  }
  .navbar-nav .nav-item .active::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background: #fff !important;
  }
`;
const NavbarLogo = styled.div`
  @media (max-width: 991px) {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
  }
`;

export { NavContainer, NavbarLogo, NavbarWrapper };

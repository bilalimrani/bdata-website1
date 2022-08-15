import homeConstants from "../../../utils/home.constants";
import { PartnersContainer } from "./Partners.style";

const Partners = () => {
  return (
    <PartnersContainer>
      <h2 className="text-center m-0 fw-bold">
        {homeConstants?.partners.title}
      </h2>
      <div></div>
    </PartnersContainer>
  );
};

export default Partners;

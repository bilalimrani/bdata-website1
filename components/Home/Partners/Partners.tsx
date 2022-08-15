import Image from "next/image";
import homeConstants from "../../../utils/home.constants";
import { PartnersContainer, ImageSection } from "./Partners.style";

const Partners = () => {
  return (
    <PartnersContainer className="container">
      <h2 className="text-center m-0 fw-bold">
        {homeConstants?.partners.title}
      </h2>
      <div className="row">
        {homeConstants?.partners?.data?.map((item, index) => (
          <ImageSection className="col-xs-6 col-sm-4 col-md-2">
            <div>
              <Image
                src={item.image}
                width="100%"
                height={70}
                className="img-responsive"
                key={index}
              />
            </div>
          </ImageSection>
        ))}
      </div>
    </PartnersContainer>
  );
};

export default Partners;

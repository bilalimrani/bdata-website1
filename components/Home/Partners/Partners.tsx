import Image from "next/image";
import homeConstants from "../../../utils/home.constants";
import { PartnersContainer, ImageSection,PartnerSection } from "./Partners.style";

const Partners = () => {
  return (
    <PartnerSection>
    <PartnersContainer className="container">
      <h3 className="text-center custom-padding-subsection m-0 fw-bold">
        {homeConstants?.partners.title}
      </h3>
      <div className="row">
        {homeConstants?.partners?.data?.map((item, index) => (
          <ImageSection className="col-xs-6 col-sm-4 col-md-2" key={index}>
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
    </PartnerSection>
  );
};

export default Partners;

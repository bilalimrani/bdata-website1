import React from "react";
import {
  AllResourcesWrapper,
  SectionPadding,
} from "../../../styles/styledComponents/AllResources.style";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllPartner from "../AllPartner/AllPartner";
import ProductsListing from "../../products/ProductsListing/ProductsListing";
import HardwarePartner from "../HardwarePartner/hardwarePartner";
import SolutionPartner from "../SolutionPartner/SolutionPartner";
import TechPartner from "../TechPartner/TechPartner";
import AllPartnerships from "../AllPartnerships/AllPartnerships";
export default function AllResources() {
  // const [key, setKey] = useState('allresources');
  return (
    <AllResourcesWrapper>
      <div className="container">
        <Tabs defaultActiveKey="allpartners" id="resources-tabs">
          <Tab eventKey="allpartners" title="All Partners">
            <SectionPadding>
              <AllPartner />
            </SectionPadding>
          </Tab>
          <Tab eventKey="device-hardware-partners" title="Device/Hardware Partners">
            <SectionPadding>
              <HardwarePartner />
            </SectionPadding>
          </Tab>
          <Tab eventKey="solution-provider" title="Solution Provider">
            <SectionPadding>
            <SolutionPartner />
            </SectionPadding>
          </Tab>
          <Tab eventKey="technology-partners" title="Technology Partners">
            <SectionPadding>
              <TechPartner />
            </SectionPadding>
          </Tab>
          <Tab eventKey="partnership" title="Partnerships">
            <SectionPadding>
              <AllPartnerships />
            </SectionPadding>
          </Tab>
        </Tabs>
      </div>
      <ProductsListing />
    </AllResourcesWrapper>
  );
}

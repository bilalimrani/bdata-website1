import React, { useState } from 'react';
import {AllResourcesWrapper ,SectionPadding}  from "./AllResources.style";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WhitePaper from "../WhitePaper/WhitePaper";
import UseCase from "../UseCase/UseCase";
import Videos from "../Videos/Videos";

export default function AllResources() {
  // const [key, setKey] = useState('allresources');
  return (
    <AllResourcesWrapper>
        <div className="container">
        
        <Tabs
      defaultActiveKey="allresources"
      id="resources-tabs"
      
    >
 
      <Tab eventKey="allresources" title="All Resources">
      <SectionPadding>
        <WhitePaper />
        <UseCase />
        <Videos />
        </SectionPadding>
      </Tab>
      <Tab eventKey="whitepapers" title="White Papers">
      <SectionPadding>
      <WhitePaper />
      </SectionPadding>
      </Tab>
      <Tab eventKey="usecases" title="Use Cases">
      <SectionPadding>
      <UseCase />
      </SectionPadding>
      </Tab>
      <Tab eventKey="videos" title="Videos">
      <SectionPadding>
      <Videos />
      </SectionPadding>
      </Tab>
      
    </Tabs>
   
    </div>
    </AllResourcesWrapper>
  );
}

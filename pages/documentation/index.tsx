import React, { useState } from "react";
import Head from "next/head";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BiHomeAlt } from "react-icons/bi";
// import MainWrapper from "../style.js";
import { GettingStarted } from "../../components/Documentation";
import { DocumentationWrapper } from "../../styles/styledComponents/documentation.style";
import Overview from "../../components/Documentation/Overview";
import ScopeWork from "../../components/Documentation/ScopeWork";
import BSTOTArchitect from "../../components/Documentation/BSTOTArchitect";
import FingerPrintArchitect from "../../components/Documentation/FPArchitect";
import BSTArchitect from "../../components/Documentation/BSTArchitect";
import FPAuth from "../../components/Documentation/UseCases/FPAuth";
import DM from "../../components/Documentation/UseCases/DM";
import EndEncryption from "../../components/Documentation/UseCases/EndEncryption";
import IntrusionDetection from "../../components/Documentation/UseCases/IntrusionDetection";
import IntrusionPrevention from "../../components/Documentation/UseCases/IntrusionPrevention";
import SecurityCompliance from "../../components/Documentation/SecurityCompliance";
import API from "../../components/Documentation/API";
import MalwareDetection from "../../components/Documentation/UseCases/MalwareDetection";
import MITRESetection from "../../components/Documentation/UseCases/MITRESetection";
import PatchManagement from "../../components/Documentation/UseCases/PatchManagement";
import ThreatResponse from "../../components/Documentation/UseCases/ThreatResponse";
import Telemetry from "../../components/Documentation/UseCases/Telemetry";
import Microprocessors from "../../components/Documentation/Microprocessors";
import Audiano from "../../components/Documentation/Audiano";

const menues: any = [
  {
    name: "Introduction to BIoT",
    Component: () => GettingStarted,
    active: true,
  },
  {
    name: "Overview",
    Component: () => Overview,
  },
  {
    name: "Scope of Work",
    Component: () => ScopeWork,
  },
  {
    name: "Architecture",
    sub: [
      {
        name: "Immutable machine fingerprints",
        Component: () => FingerPrintArchitect,
      },
      {
        name: "BIoT Security Technology - Architecture",
        Component: () => BSTArchitect,
      },
      {
        name: "BIoT Security Technology - OT Architecture",
        Component: () => BSTOTArchitect,
      },
      {
        name: "Microprocessors",
        Component: () => Microprocessors,
      },
      {
        name: "BDATA Aurdino Authentication and Authorization",
        Component: () => Audiano,
      },
    ],
  },
  {
    name: "Use cases/features",
    sub: [
      {
        name: "Fingerprint based authentication",
        Component: () => FPAuth,
      },
      {
        name: "Device management",
        Component: () => DM,
      },
      {
        name: "End to end data encryption",
        Component: () => EndEncryption,
      },
      {
        name: "Intrusion detection",
        Component: () => IntrusionDetection,
      },
      {
        name: "Intrusion prevention",
        Component: () => IntrusionPrevention,
      },
      {
        name: "Telemetry",
        Component: () => Telemetry,
      },
      {
        name: "Threat Response",
        Component: () => ThreatResponse,
      },
      {
        name: "Patch Management",
        Component: () => PatchManagement,
      },
      {
        name: "MITRE Detection",
        Component: () => MITRESetection,
      },
      {
        name: "Malware Detection",
        Component: () => MalwareDetection,
      },
    ],
  },
  {
    name: "API",
    Component: () => API,
  },
  {
    name: "Security compliance",
    Component: () => SecurityCompliance,
  },
];

const Documentation = () => {
  const [Component, setComponent] = useState(menues[0].Component);
  const [breadcrumb, setBreadcrumb] = useState([menues[0].name]);

  const onChangeComponent = (component) => {
    setComponent(component);
  };

  const onTabChange = (index, subIndex) => {
    clearAllActive();
    if (subIndex === null) {
      menues.map((item, innerIndex) => {
        if (innerIndex === index) {
          item.active = true;
          setBreadcrumb([item.name]);
        }
      });
    } else {
      setBreadcrumb([menues[index].name]);
      menues[index]?.sub?.map((item, innerIndex) => {
        if (innerIndex === subIndex) {
          item.active = true;
          setBreadcrumb((oldArray) => [...oldArray, item.name]);
        }
      });
    }
  };

  const clearAllActive = () => {
    menues.map((item) => {
      item.active = false;
      if (item?.sub) {
        item.sub?.map((item1) => {
          item1.active = false;
        });
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Documentation</title>
      </Head>
      <DocumentationWrapper>
        <Sidebar>
          <Menu
            style={{
              minHeight: "600px",
              maxHeight: "600px",
              overflow: "scroll",
            }}
          >
            {menues.map((item: any, index) => {
              if (item?.sub) {
                return (
                  <SubMenu label={item.name} key={index}>
                    {item?.sub?.map((item1, index1) => (
                      <MenuItem
                        active={item1?.active && true}
                        onClick={() => {
                          onChangeComponent(item1.Component);
                          onTabChange(index, index1);
                        }}
                      >
                        {item1.name}
                      </MenuItem>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <MenuItem
                  key={index}
                  active={item?.active && true}
                  onClick={() => {
                    onChangeComponent(item.Component);
                    onTabChange(index, null);
                  }}
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </Menu>
        </Sidebar>
        <div style={{ padding: "20px" }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li
                className="breadcrumb-item active"
                aria-current="page"
                onClick={() => {
                  clearAllActive();
                  menues[0].active = true;
                  setBreadcrumb([menues[0]?.name]);
                  setComponent(menues[0]?.Component);
                }}
              >
                <BiHomeAlt color="#5AAEDD" />
              </li>
              {breadcrumb?.map((item, index) => (
                <li
                  key={index}
                  className="breadcrumb-item active"
                  aria-current="page"
                >
                  {item}
                </li>
              ))}
            </ol>
          </nav>
          <Component />
        </div>
      </DocumentationWrapper>
    </div>
  );
};

export default Documentation;

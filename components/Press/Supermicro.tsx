import Anchor from "../Common/Anchor";
import PressCommon from "./common";
const supermicroPress = require("public/img/supermicroPress.jpeg");
const bdataPress = require("public/img/bdataPress.png");

export default function Supermicro({ data }) {
  return (
    <div>
      <PressCommon data={data} />
      <br />
      <p>
        Hamilton, Ont., September 14, 2020 – BDATA Solutions Inc, an innovative
        blockchain and data driven organization to provide world first BIOT
        (Blockchained IOT) simcard with blockchain data security, announced a
        global partnership with Supermicro Computers Inc. (Nasdaq: SMCI), to
        deploy BDATA’s technology on Supermicro’s IoT gateway devices for
        customers in oil and gas, manufacturing, mining, nuclear,
        telecommunication, smart city, industry4.0 and defence sectors.
      </p>
      <p>
        The partnership is committed to the protection of customers’ data and
        device integrity and resolving the ever-increasing cyber threat to IoT
        devices and network safety.
      </p>
      <p>
        The estimated damage expected by 2021 from cyber-attacks on IoT devices
        and smart infrastructures will be up to $600 billion US dollars,
        resulting in the cyber-security concern becoming the biggest roadblock
        for companies to implement IoT and smart devices.
      </p>
      <p>
        “The partnership between BDATA and Supermicro will help companies
        mitigate cybersecurity risks and to help them to implement IoT devices
        without worries, while we offer end-to-end secure connectivity by using
        BDATA’s patent pending BIOT technology,” said Syed Bari, Founder of
        BDATA Solutions.
      </p>
      <p>
        Supermicro will provide the BIOT Gateway device (Blockchain-enabled IoT
        Gateway) to secure the IoT devices and communication network from device
        to cloud.
      </p>
      <p>
        The BIOT Gateway device harnesses the power of blockchain, ensuring the
        data that passes through and is stored on the BIOT gateway device
        immutable, distributed, and decentralized.
      </p>
      <p>
        The data stored in the BIOT protected devices are temper-proof and
        protects the integrity of the data. The network is decentralized, making
        it impossible for hackers to compromise the system even if they were
        able to hack into on-premise devices. Finally, the data stored in the
        network is distributed. Each device is acting as a node storing all
        transaction data. The BIOT Gateway device uses separate channels for
        authentication and communication. The dual channels configuration method
        guarantees data privacy while protecting the system.
      </p>
      <img src={supermicroPress} alt="" />
      <h4 style={{ fontWeight: "700", marginBottom: "0px" }}>
        About Supermicro Computer, Inc.
      </h4>
      <p>
        Supermicro Computer, Inc. is a global leader in enterprise computing,
        storage, networking solutions and green computing technology, today
        announced that its global partnership with BDATA Solutions Inc a
        Toronto, Canada based company to offer, first ever embedded blockchain
        simcard driven enterprise computing, storage, and IoT gateway devices
        solution to customers in telecommunication, smart city, industry 4.0,
        and defence sectors.
      </p>
      <Anchor
        text="https://www.supermicro.com/en/"
        href="https://www.supermicro.com/en/"
        style={{ textDecoration: "underline" }}
      />
      <br />
      <br />

      <img src={bdataPress} alt="bdata press" />
      <h4 style={{ fontWeight: "700", marginBottom: "0px" }}>
        About BDATA Solutions Inc,
      </h4>
      <p>
        BDATA Solutions is an innovative blockchain and data driven organization
        to provide world first BIOT simcard with blockchain data security, today
        announced that its global partnership with Supermicro to provide BDATA
        technology for the deployment on Supermicro IoT gateway devices for
        customers in telecommunication, smart city, industry4.0 and defence
        sectors.
      </p>
      <Anchor
        text="https://bdata.ca/"
        href="https://bdata.ca/"
        style={{ textDecoration: "underline" }}
      />
    </div>
  );
}

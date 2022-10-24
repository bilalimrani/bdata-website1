import Anchor from "../Common/Anchor";
import PressCommon from "./common";

export default function Telus({ data }) {
  return (
    <div>
      <PressCommon data={data} />
      <p>
        <b>June 30, 2020</b>
      </p>
      <p>
        The Forge client B Data Solutions Inc. is collaborating with Telus to
        implement connectivity of IoT devices using BDATA-Blockchain on TELUS
        4G/5G network in Canada. This provides password-less highly secure and
        desirable Intelligent Plant Management System (IPMS®) as an Industry 4.0
        platform to Process Industries. The current IoT devices are connected
        through traditional VPN and private IP addresses, such connections are
        at risk of device hijacking, data breach, and damage to assets. The
        risks could cost millions of dollars to customers, B Data Solutions
        mitigates these risks by using blockchain technology. The Biiot is a
        password-less blockchain technology that helps B Data Solutions
        customers monitor their assets in real-time with secure and private
        connections.
      </p>
      <p>
        “We are pleased to collaborate with TELUS in implementing connectivity
        of IoT devices using blockchain technology, providing secure
        connectivity for customers,” said Syed Bari, co-founder of B Data
        Solutions.
      </p>
      <Anchor
        style={{ fontWeight: "900" }}
        href="https://www.bdata.ca/"
        text="B Data Solutions Inc."
      />
      <p>
        B Data Solutions Inc. is using IoT and Blockchain technology to help
        transform the global energy industry to the industry 4.0 standard. B
        Data Solutions has designed and developed Biiot-Simcard technology, a
        disruptive patent-pending technology, which enables clients to fully
        utilize the benefits of blockchain connectivity. B Data Solutions also
        created IPMS (Intelligent Plant Management Solution) to help
        manufacturing and process industries to monitor and manage their assets
        with AI analytics and Blockchain connection.
      </p>
      <Anchor
        style={{ fontWeight: "900" }}
        href="https://www.telus.com/en/"
        text="TELUS"
      />
      <p>
        TELUS Communications Inc. (TCI) is the wholly owned principal subsidiary
        of{" "}
        <Anchor
          text="TELUS Corporation"
          href="https://en.wikipedia.org/wiki/Telus_Corporation"
          style={{ textDecoration: "underline" }}
        />
        , a Canadian national telecommunications company that provides a wide
        range of telecommunications products and services including internet
        access, voice, entertainment, healthcare, video, and IPTV television.
      </p>
    </div>
  );
}

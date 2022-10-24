import Anchor from "../Common/Anchor";
import PressCommon from "./common";

export default function LionsLair({ data }) {
  return (
    <div>
      <PressCommon data={data} />
      <br />
      <p>
        <b>September 24, 2020</b>
      </p>
      <p>
        Congratulations to The Forge clients, BData Solutions (BDATA) for
        receiving second place and ImaginAble Solutions for receiving The
        People’s Choice award ($2,500 cash prize) in Innovation Factory’s annual
        LiONS LAIR pitch competition. Sixteen innovative startups pitched to
        three industry-leading judges and a television audience during the
        virtual bracket-style tournament that took place on September 21-24.
        Read more.
      </p>
      <p>
        BDATA impressed the judges with their innovative technology. BDATA
        develops IoT and Blockchain technology to help transform the global
        energy industry to the industry 4.0 standard. Before the competition,
        BDATA announced a partnership with Supermicro to offer the world’s first
        BIOT (Blockchained IOT) embedded simcard to enable IoT Gateway Devices
        for customers in Oil & Gas, Manufacturing, Mining, Nuclear, Defence, and
        Smart Cities Projects. BDATA has also collaborated with Telus to
        implement connectivity of IoT devices using BDATA-Blockchain on TELUS
        4G/5G network in Canada.
      </p>
      <p>
        <Anchor
          text="ImaginAble Solutions"
          href="https://www.imaginablesolutions.com/"
          style={{ textDecoration: "underline" }}
        />{" "}
        developed Guided Hands™, a device that enables people with limited fine
        motor skills to write, draw and paint as well as type and scroll on a
        computer or tablet. ImaginAble Solutions has garnered significant media
        attention and was recently featured in{" "}
        <Anchor
          text="The Spectator"
          href="https://www.thespec.com/business/2020/10/01/mcmaster-student-invention-could-improve-quality-of-life-for-those-with-impaired-hand-mobility.html"
          style={{ textDecoration: "underline" }}
        />
        ,{" "}
        <Anchor
          text="The Hammer"
          href="https://quickbitenews.com/hamilton/"
          style={{ textDecoration: "underline" }}
        />
        , and Cable 14 Hamilton news. Lianna Genovese, the founder of ImaginAble
        Solutions, successfully transformed her undergraduate engineering
        project into an award-winning assistive device for those with impaired
        mobility.
      </p>
      <p>
        Three other notable clients of The Forge pitched in the final round of
        LiONS LAIR:{" "}
        <Anchor
          text="MyPalate Inc."
          href="http://mypalate.ca/"
          style={{ textDecoration: "underline" }}
        />{" "}
        (MyPalate),{" "}
        <Anchor
          text="PULSE Life Saving Inc. (PULSE)"
          href="http://pulselifesaving.com/"
          style={{ textDecoration: "underline" }}
        />
        , and Reviewerly.
      </p>
    </div>
  );
}

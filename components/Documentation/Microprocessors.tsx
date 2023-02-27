const microProcessor = require("public/img/aurdino.jpg");

export default function Microprocessors() {
  return (
    <div>
      Arduino is a microcontroller based platform (ATMEGA 328 for the UNO). In
      general a Microcontroller is better suited than a microprocessor to
      anything that requires sensing of inputs. That's because micro-controllers
      like the ATMEGA 328 have analogue to digital converters (ADCs) to sense
      voltages and also have PWM outputs as well as digital I/Os.
      <br />
      Biggest problem while working with arduino devices is that If sensitive
      information is transmitted or stored on the Arduino Uno without proper
      encryption, it can be easily intercepted by an attacker. BDATA provides
      binaires which allows companies to authenticate and authorize arduino
      devices without need of storing sensitive information like passwords using
      secure fingerprints.
      <br />
      <img src={microProcessor} width="100%" alt="" />
    </div>
  );
}

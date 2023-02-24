const fingerPrint = require("public/img/fingerPrint.jpg");

export default function FingerPrintArchitect() {
  return (
    <div>
      BIoT technology has a unique feature of immutable machine fingerprint,
      which means that each device has a unique immutable identity which
      authenticates the device across the network.
      <img src={fingerPrint} alt="finger print" width="100%" />
    </div>
  );
}

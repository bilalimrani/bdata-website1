const fingerPrintAuth = require("public/img/fingerPrintAuth.jpg");

export default function FPAuth() {
  return (
    <div>
      BIoT fingerprint is a password-less patent-pending technology that allows
      customers to achieve a multilayer, quantum-resilient authentication
      method. BIoT immutable fingerprint technology enables customers to create
      a secure virtual network of trusted devices, as well as a trusted source
      of data, to ensure data security.
      <br />
      BIoT immutable fingerprint technology also ensures that the data on the
      network is coming from a trusted source. When data is transmitted over the
      network, it is also processed using an immutable hash function and the
      resulting hash value is stored in a secure ledger. When the data is
      received by another device, the hash value is compared to the stored value
      to ensure that it has not been tampered with or altered in transit.
      <br />
      In summary, BIoT immutable fingerprint technology creates a secure virtual
      network of trusted devices and a trusted source of data by creating
      unique, unchangeable fingerprints for devices and ensuring that data is
      coming from a trusted source through the use of immutable hash functions.
      This provides a high level of security for the network and the data on it.
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={fingerPrintAuth} alt="finger print" width="50%" />
      </div>
    </div>
  );
}

const dataEncryption = require("public/img/dataEncryption.jpg");

export default function EndEncryption() {
  return (
    <div>
      The BIoT Security Technology utilizes a multilayer architecture that
      enables customers to have real-time, end-to-end encrypted data streaming.
      This includes data from IoT devices, file transfers, and device log
      transfers, among others.
      <br />
      One of the key features of BIoT Security Technology is its use of patent
      pending fingerprint-based encryption and decryption methodology. This
      method authenticates the source of the data by using the unique
      fingerprint of the device, ensuring that the data is coming from a trusted
      source and eliminating the risk of man-in-the-middle or other types of
      cyber attacks.
      <br />
      This approach ensures that the data being transmitted is secure and cannot
      be intercepted or tampered with by unauthorized parties. It also ensures
      that the data is authentic, and any attempt to tamper with the data will
      be immediately detected and prevented.
      <br />
      Overall, BIoT Security Technology provides a comprehensive and secure
      solution for data transmission, by utilizing a multilayer architecture and
      fingerprint based encryption and decryption methodology to ensure that the
      data is authentic and secure, and eliminate the risk of cyber attacks.
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={dataEncryption} alt="finger print" width="50%" />
      </div>
    </div>
  );
}

const nodemailer = require("nodemailer");

export default async function (req, res) {
  console.log(req.body);
  const { email, subject, message, name } = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    ignoreTLS: false,
    auth: {
      user: "bimrani816@gmail.com",
      pass: "rana7441634",
    },
  });

  let info = await transporter.sendMail({
    from: "bimrani816@gmail.com",
    to: "bimrani816@gmail.com",
    subject: subject,
    html: `<div>Name: ${name || "N/A"}</div><div>Phone: ${
      "fdsfsdfs" || "N/A"
    }</div><div>Email ${email || "N/A"}</div><div>Description: ${
      "fsdfs" || "N/A"
    }</div>`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

const nodemailer = require("nodemailer");

export default async function (req, res) {
  const { attachments, subject } = req.body
  console.log(req.body)
  // console.log(process.env)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com',
    secure: true, // use TLS
    auth: {
      user: "no_reply@bdata.ca",
      pass: "E=Q8bq>P",
    },
  });
  let info = await transporter.sendMail({
    from: "no_reply@bdata.ca",
    to: "hasnat98044@gmail.com",
    subject: subject,
    html: 'testing',
    // html: `<div>Name: ${name || "N/A"}</div><div>Phone: ${
    //   "fdsfsdfs" || "N/A"
    // }</div><div>Email ${email || "N/A"}</div><div>Description: ${
    //   "fsdfs" || "N/A"
    // }</div>`,
    attachments: attachments
  });

  transporter.sendMail(mailOptions, function (err, res1) {
    if (err) {
      console.log(err, "Asd")
      res.status(400).end(JSON.stringify({ message: "Error" }));

    } else {
      res.status(200).end(JSON.stringify({ message: "Send Mail" }));
    }
  });
}

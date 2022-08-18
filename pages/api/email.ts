import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email } = req.body;
  // console.log(process.env)

  const client = new SMTPClient({
    user: "yasirimrani08@gmail.com",
    password: "Rana6745522!",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send(
      {
        text: `Just for testing purpose`,
        from: "yasirimrani08@gmail.com",
        to: email,
        subject: "testing emailjs",
      },
      () => {}
    );
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}

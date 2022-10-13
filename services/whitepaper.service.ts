import emailjs from "@emailjs/browser";
import { downloadWhitePaperEmail } from "../utils/emilTemplate";

export const sendWhitePaper = (data) => {
  emailjs
    .send(
      "service_jpjkbyk",
      "template_1ptwhi3",
      {
        subject: data.subject,
        from_name: "BDATA Team",
        message_html: downloadWhitePaperEmail(data),
      },
      "-Q1ZU0qTKDXiGYV8T"
    )
    .then(
      () => {
        return true;
      },
      () => {
        return false;
      }
    );
};

import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";

export const sendWhitePaper = async (data) => {
  const res = await sendEmail(data);
  if (res.status && res?.text === "OK") {
    data.addToast("Please check your email!", {
      appearance: "success",
      autoDismiss: true,
    });
    data.to_email = "bilal@bdata.ca";
    data.templateId = "template_fv74s89";
    sendEmail(data);
  }
};

export const sendEmail = async (data) => {
  const res = await emailjs.send(
    data?.service,
    data?.templateId,
    {
      ...data,
    },
    data?.account
  );

  return res;
};

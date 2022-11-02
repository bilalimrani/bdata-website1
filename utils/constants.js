import validator from "email-validator";

export const emailValidator = (form) => {
  if (
    !form.email.endsWith("gmail.com") &&
    !form.email.endsWith("email.com") &&
    !form.email.endsWith("outlook.com") &&
    !form.email.endsWith("rocketmail.com") &&
    !form.email.endsWith("yahoo.com") &&
    validator.validate(form.email)
  ) {
    return true;
  }
  return false;
};

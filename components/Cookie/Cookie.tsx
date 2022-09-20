import CookieConsent, { Cookies } from "react-cookie-consent";

const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      declineButtonText="I decline"
      buttonText="Accept All"
      enableDeclineButton
      flipButtons
      cookieName="general"
      expires={999}
      overlay
    >
      We use cookies on our website to give you the most relevant experience by
      remembering your preferences and repeat visits. By clicking “Accept All”,
      you consent to the use of ALL the cookies. However, you may visit “Cookie
      Settings” to provide a controlled consent.
    </CookieConsent>
  );
};
export default Cookie;

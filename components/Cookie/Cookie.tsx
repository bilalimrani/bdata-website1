import CookieConsent, { Cookies } from "react-cookie-consent";
import CookieContainer from "./Cookie.style";

const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      declineButtonText="I decline"
      enableDeclineButton
      flipButtons
      cookieName="general"
      expires={999}
      overlay
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
export default Cookie;

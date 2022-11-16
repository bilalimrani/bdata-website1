import Alert from "react-bootstrap/Alert";

function AlertPopup({ variant, text }) {
  return (
    <Alert key={variant} variant={variant}>
      {text}
    </Alert>
  );
}

export default AlertPopup;

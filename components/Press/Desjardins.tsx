import PressCommon from "./common";
import { Button } from "../../styles/styledComponents/pressLightWeightSection.style";

export default function Desjardins({ data }) {
  return (
    <div>
      <PressCommon data={data} />
      <Button
        href="https://www.linkedin.com/feed/update/urn:li:activity:6857381812528799744/"
        target="_blank"
        className="btn btn-primary"
      >
        Read More
      </Button>
    </div>
  );
}

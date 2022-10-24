import Image from "next/image";
import { ImgContainer } from "./pressCommon.style";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function PressCommon({ data = {} }: any) {
  return (
    <div>
      <h3 className="text-left m-0 custom-padding fw-bold">{data?.title}</h3>
      {data.img && (
        <ImgContainer>
          <Image layout="fill" src={data?.img} />
        </ImgContainer>
      )}
    </div>
  );
}

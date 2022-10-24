import styled from "styled-components";

const A = styled.a``;

export default function Anchor({ href = "#", text, style = {} }) {
  return (
    <A href={href} target="_blank" style={style}>
      {text}
    </A>
  );
}

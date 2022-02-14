import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "verticat";
}
const HorizontalMargin = styled.div<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
const VerticalMargin = styled.div<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
export default function Marginer(Props: IMarginerProps) {
  const { direction } = Props;
  if (direction === "horizontal")
    return <HorizontalMargin {...Props}></HorizontalMargin>;
  else return <VerticalMargin {...Props} className="my-6"></VerticalMargin>;
}

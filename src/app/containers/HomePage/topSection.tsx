import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Blob from "../../../assets/images/blob.svg";
import Mcleren from "../../../assets/images/mclaren-orange-big.png";
import { Button } from "../../components/button";
import { SCREENS } from "../../components/responsive";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
w-full 
max-w-screen-2xl
flex
justify-between
pl-3 pr-3
lg:pl-12 lg:pr-12 
`}
`;

const LeftContainer = styled.div`
  ${tw`
w-1/2 flex flex-col
`}
`;

const RightContainer = styled.div`
  ${tw`
w-1/2 flex flex-col relative mt-20
`}
`;
const Slogan = styled.h1`
  ${tw`
font-bold text-2xl xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold
text-black mb-4 sm:leading-snug xl:leading-relaxed
`}
`;
const BlobContainer = styled.div`
width:20em;
 height:10em; 
 position:absolute;
  right -5em; top:-9em;
   z-index:-1;
   transition:rotate(-38deg)

img{
    width:100%;
    height:auto;
    max-height:max-content;
    right:4em;
}
@media (min-width: ${SCREENS.sm}){
    width:40em;
    max-height:10em;
    right:-9em;
    top:-16em;
    transformation:rotate(-25deg);
}

@media (min-width: ${SCREENS.lg}){
    width:50em;
    max-height:30em;
    right:-7em;
    top:-15em;
    transformation:rotate(-30deg);
}
@media (min-width: ${SCREENS.xl}){
    width:60em;
    max-height:30em;
    right:-12em;
    top:-19em;
    transformation:rotate(-40dg);
}
`;
const Description = styled.p`
  ${tw`
text-xs lg:text-sm xl:text-lg sm:max-h-full sm:overflow-hidden max-h-12 text-gray-700
`}
`;
const StandAloneCar = styled.div`
  height: 10em;
  position: -6em;
  top: -5em;
  position: absolute ${tw`w-auto `};

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 24em;
    right: -8em;
    top: -5em;
  }
`;
const ButtonContainer = styled.div`
  ${tw`
 flex 
 mt-4
 flex-wrap
 `}
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars In Owerri.</Slogan>
        <Description>
          Are you touring Owerri. Rent the best Quality Cars with us at an
          affordable price. Come Lets take care of your luxury vacation
        </Description>
        <ButtonContainer>
          <Button text="Book Your Ride"></Button>
          <Button text="Sell Your Car" theme="filled"></Button>
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={Blob} alt="" />
        </BlobContainer>
        <StandAloneCar>
          <img src={Mcleren} alt="" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}

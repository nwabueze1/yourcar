import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import Jeep from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
w-full flex flex-wrap items-center  pt-4 pb-4 pr-7 pl-7 md:pl-0 md:pr-0
bg-white
`}
`;
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;
const InfoContainer = styled.div`
  ${tw`
md:w-1/2 flex flex-col md:ml-6 2xl:ml-16 
`}
`;
const Title = styled.h1`
  ${tw`
text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal  
`}
`;
const InfoText = styled.p`
  ${tw`text-gray-500 text-sm md:text-base md:max-w-2xl mt-4 font-normal`}
`;
export default function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <CarContainer>
        <img src={Jeep} alt=""></img>
      </CarContainer>
      <InfoContainer>
        <Title className="capitalize">
          fill the best experience with our rental deals
        </Title>
        <InfoText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          maxime aliquam, voluptatibus quis ut fuga qui voluptatum molestias ea
          id sed debitis totam, vel voluptatem dolorem repudiandae tenetur? Hic,
          quide. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, voluptates expedita ipsum voluptatibus a error qui totam
          illo assumenda, quaerat laborum eligendi eius laboriosam vitae ipsam
          in nemo illum cumque. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Saepe nemo consectetur ducimus adipisci nam quaerat.
          Molestiae quas optio, possimus unde voluptatem, exercitationem iste
          commodi sit quia eius cumque necessitatibus delectus.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}

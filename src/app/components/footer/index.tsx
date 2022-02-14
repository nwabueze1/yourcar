import React from "react";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogo from "../../../assets/images/car-logo-dark.png";
import Logo from "../logo";

const FooterContainer = styled.div`
  ${tw`
w-full

bg-black pt-4 md:pt-12 flex  pb-1 justify-center items-center
`}
`;
const InnerConatiner = styled.div`
  ${tw`
flex  max-w-screen-2xl   flex-wrap
`}
`;
const AboutContainer = styled.div`
  ${tw`
flex flex-col ml-5
`}
`;
const AboutText = styled.p`
  ${tw`
text-white text-sm font-normal max-w-xs leading-5 mt-2
`}
`;
const LinksContainer = styled.ul`
  ${tw`
outline-none list-none flex flex-col 
`}
`;
const ListItem = styled.li`
  ${tw`
text-sm text-white mb-3 hover:text-gray-200 transition
`};
  $ > a {
    ${tw`
text-sm text-white
`}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
 font-bold text-white mb-3 text-2xl
`}
`;

const SectionContainer = styled.div`
  ${tw`mr-6 flex flex-col`}
`;
const HorizontalSection = styled.div`
  ${tw`
    flex flex-row items-center justify-center
    `}
`;
const RedIcon = styled.span`
  ${tw`
w-8 h-8 p-2 rounded-full flex items-center  text-white text-base mr-2 bg-red-500
`}
`;
const SmallText = styled.h6`
  ${tw`
text-white text-sm
`}
`;
const CopyRightContainer = styled.div`
  ${tw` flex  bg-black w-full justify-center`}
`;
const CopyWright = styled.div`
  ${tw`
text-red-500 font-bold
`}
`;
export default function Footer() {
  return (
    <>
      <FooterContainer>
        <InnerConatiner>
          <AboutContainer>
            <Logo color="white" image={CarLogo}></Logo>
            <AboutText>
              Your Car is a car renting and selling company located in many
              courties across the woeld which has high qaulity cars and top
              graded cars
            </AboutText>
          </AboutContainer>
          <SectionContainer>
            <HeaderTitle>Our Links</HeaderTitle>
            <LinksContainer>
              <ListItem>
                <a href="#">Home</a>
              </ListItem>
              <ListItem>
                <a href="#">About Us</a>
              </ListItem>
              <ListItem>
                <a href="#">Services</a>
              </ListItem>
              <ListItem>
                <a href="#">Models</a>
              </ListItem>
              <ListItem>
                <a href="#">Blog</a>
              </ListItem>
            </LinksContainer>
          </SectionContainer>
          <SectionContainer>
            <HeaderTitle>Other Links</HeaderTitle>
            <LinksContainer>
              <ListItem>
                <a href="#">FAQ</a>
              </ListItem>
              <ListItem>
                <a href="#">Contact Us</a>
              </ListItem>
              <ListItem>
                <a href="#">Support</a>
              </ListItem>
              <ListItem>
                <a href="#">Privacy Plicy</a>
              </ListItem>
              <ListItem>
                <a href="#">Terms &amp; Conditions </a>
              </ListItem>
            </LinksContainer>
          </SectionContainer>
          <SectionContainer>
            <HeaderTitle>Call Now</HeaderTitle>
            <HorizontalSection>
              <RedIcon>
                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              </RedIcon>
              <SmallText>+2349032295542</SmallText>
              <SmallText>+2349032295542</SmallText>
            </HorizontalSection>
          </SectionContainer>
          <SectionContainer>
            <HeaderTitle>Send Us Email</HeaderTitle>
            <HorizontalSection>
              <RedIcon>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </RedIcon>
              <SmallText>Padrefidelis111@gmail.com</SmallText>
            </HorizontalSection>
          </SectionContainer>
        </InnerConatiner>
      </FooterContainer>
      <CopyRightContainer>
        <CopyWright>
          Copyright &copy; fidelis.dev {new Date().getFullYear()}
        </CopyWright>
      </CopyRightContainer>
    </>
  );
}

import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
w-full flex flex-col items-center py-3 lg:py-6
`}
`;
const Title = styled.h2`
  ${tw`
text-3xl lg:text-4xl text-black font-extrabold
`}
`;
const StepsConatiner = styled.div`
  ${tw`flex justify-evenly flex-row flex-wrap mt-7 lg:mt-16`}
`;
const StepContainer = styled.div`
  ${tw`
flex flex-col items-center transition-colors hover:text-red-500
`}
`;
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
flex rounded-lg items-center justify-center p-6
`};
`;
const StepTitle = styled.h4`
  ${tw`
text-black text-lg font-semibold mt-4
`}
`;
const StepDescription = styled.p`
  ${tw`
text-xs md:text-sm text-center w-10/12 text-gray-600
`}
`;
const StepIcon = styled.span`
  ${tw` text-3xl text-red-500`}
`;
export default function BookingSteps() {
  return (
    <Container>
      <Title>Our Booking Steps</Title>
      <StepsConatiner>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pick up the best date to rent a car for you
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Book your Car</StepTitle>
          <StepDescription>
            Book your car nice car with ease in one
          </StepDescription>
        </StepContainer>
      </StepsConatiner>
    </Container>
  );
}

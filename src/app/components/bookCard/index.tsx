import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Marginer from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
  
    flex justify-center items-center rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:py-2
    md:px-9
    `}
`;
const ItemsContainer = styled.div`
  ${tw`
flex 
relative

`}
`;
const Icon = styled.span`
  ${tw`text-red-500 
fill-current text-xs md:text-base mr-1 md:mr-3 ml-1 md:ml-3
`}
`;
const SmallIcon = styled.span`
  ${tw`
text-gray-700 fill-current text-xs md:text-base ml-1
`}
`;
const Name = styled.span`
  ${tw` text-gray-800 text-xs md:text-sm cursor-pointer select-none`}
`;
const LineSpareator = styled.span`
  width: 5px;
  height: 45px;
  ${tw`
 bg-red-800 mx-2 md:mx-5
`}
`;
const DateCalender = styled(Calendar)`
  position: absolute;
  top: 5em;
  left: -2em;
  max-width: none;
  user-select: none;
` as any;
export function BookCard() {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalenderOpen] =
    React.useState<boolean>(false);

  const [returnDate, setReturnDate] = React.useState<Date>(new Date());
  const [isReturnDateOpen, setIsReturnDateOpen] =
    React.useState<boolean>(false);

  return (
    <CardContainer>
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
        </Icon>
        <Name
          onClick={() => {
            setIsReturnDateOpen(false);
            setIsStartCalenderOpen(!isStartCalendarOpen);
          }}
        >
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={!isStartCalendarOpen ? faCaretDown : faCaretUp}
          ></FontAwesomeIcon>
        </SmallIcon>
        {/* start date input and logic behind opening and closing of the date modal */}
        {isStartCalendarOpen && (
          <DateCalender value={startDate} onChange={setStartDate} />
        )}
      </ItemsContainer>
      <LineSpareator></LineSpareator>
      {/* return date container */}
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
        </Icon>
        <Name
          onClick={() => {
            setIsStartCalenderOpen(false);
            setIsReturnDateOpen(!isReturnDateOpen);
          }}
        >
          Return Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={!isReturnDateOpen ? faCaretDown : faCaretUp}
          ></FontAwesomeIcon>
        </SmallIcon>
        {isReturnDateOpen && (
          <DateCalender value={returnDate} onChange={setReturnDate} />
        )}
      </ItemsContainer>
      <Marginer direction="horizontal" margin="2rem" />
      <Button text="Book Your Ride"></Button>
    </CardContainer>
  );
}

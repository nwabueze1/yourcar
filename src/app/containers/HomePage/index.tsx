import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import Footer from "../../components/footer";
import Marginer from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import AboutUs from "./aboutUs";
import BookingSteps from "./bookingSteps";
import TopCars from "./topCars";
import { TopSection } from "./topSection";

const PageConatiner = styled.div`
  ${tw`flex flex-col w-full h-screen items-center overflow-x-hidden `}
`;

export const HomePage = (): JSX.Element => {
  return (
    <PageConatiner>
      <NavBar></NavBar>
      <TopSection></TopSection>
      <Marginer direction="verticat" margin="4em"></Marginer>
      <BookCard></BookCard>
      <Marginer direction="verticat" margin="6em"></Marginer>
      <BookingSteps></BookingSteps>
      <Marginer direction="verticat" margin="5em"></Marginer>
      <AboutUs></AboutUs>
      <Marginer direction="verticat" margin="5em"></Marginer>
      <TopCars></TopCars>
      <Marginer direction="verticat" margin="5em"></Marginer>
      <Footer />
    </PageConatiner>
  );
};

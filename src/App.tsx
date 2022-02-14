import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`flex flex-col h-full w-full`}
`;
function App(): JSX.Element {
  return (
    <AppContainer>
      <HomePage></HomePage>
    </AppContainer>
  );
}

export default App;

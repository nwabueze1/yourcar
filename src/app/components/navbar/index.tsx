import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import { NavItems } from "./navitems";

const NavBarConatiner = styled.div`
  min-height: 68px;
  ${tw`w-full max-w-screen-2xl flex flex-row items-center lg:pl-12 lg:pr-12 justify-between`};
`;

const LogoContainer = styled.div`
  ${tw`md:mr-10`}
`;
export const NavBar = (): JSX.Element => {
  return (
    <NavBarConatiner>
      <LogoContainer>
        <Logo></Logo>
      </LogoContainer>
      <NavItems></NavItems>
    </NavBarConatiner>
  );
};

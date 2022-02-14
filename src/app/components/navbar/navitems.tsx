import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menustyles from "./menustyles";

const ListContainer = styled.ul<{ menu?: any }>`
  ${tw`
  flex list-none  
  
 `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
 flex-col items-center justify-center
 `}
    `}
`;
const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm md:text-base text-black font-medium mr-1 md:mr-5 cursor-pointer transition
    duration-300 ease-in-out hover:text-gray-300
    `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-white border-b-2 text-xl focus:text-white items-center 
    `}
    `}
`;
interface navProp {
  ismenu?: boolean;
}
const Nav = ({ ismenu }: navProp): JSX.Element => {
  interface itemProp {
    name: string;
    link: string;
    isMenu?: boolean;
  }

  const Item = ({ link, name, isMenu }: itemProp) =>
    isMenu ? (
      <NavItem menu>
        <a href={link}>{name}</a>
      </NavItem>
    ) : (
      <NavItem>
        <a href={link}>{name}</a>
      </NavItem>
    );
  return (
    <>
      <Item link="#" name="Home" isMenu={ismenu}></Item>
      <Item link="#" name="Cars" isMenu={ismenu}></Item>
      <Item link="#" name="Services" isMenu={ismenu}></Item>
      <Item link="#aboutUs" name="Contact Us" isMenu={ismenu}></Item>
    </>
  ) as any;
};
export function NavItems(): JSX.Element {
  const isMobile: Boolean = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <ListContainer menu>
        <Menu right styles={menustyles}>
          <Nav ismenu />
        </Menu>
      </ListContainer>
    );
  } else {
    return (
      <ListContainer>
        <Nav />
      </ListContainer>
    );
  }
}

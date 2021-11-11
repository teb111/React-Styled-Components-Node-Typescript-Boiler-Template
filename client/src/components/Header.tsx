import React from "react";
import { HeaderContainer, HeaderText } from "./style/Header.styled";

export default function Header() {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderText>
          React(TailwindCSS and Styled Components) + Node Typescript Boiler
          Template
        </HeaderText>
      </HeaderContainer>
    </React.Fragment>
  );
}

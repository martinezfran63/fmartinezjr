import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/nav.js";
import redhat from './fonts/Red_Hat_Text/RedHatText-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  body {
    @import url(${redhat});
    font-family: 'Red Hat Text', sans-serif;
  }
  `;

const H1 = styled.h1`
font-weight: bold;
color: black;
font-size: 14em
margin: 0.5rem 1rem;
`;

function Homepage() {
  return (
    <div>
      <Nav />

      <Typing speed={50}>
        <GlobalStyles />
        <H1>francisco martinez jr</H1>
      </Typing>
    </div>
  );
}

export default Homepage;

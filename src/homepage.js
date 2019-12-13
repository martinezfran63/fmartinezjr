import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import Nav from "./components/nav.js";

const H1 = styled.h1`
font-family: 'Roboto';
font-family: 'Roboto', sans-serif;
font-weight: regular;
color: black;
font-size: 14em
margin: 0.5rem 1rem;
`;

function Homepage() {
  return (
    <div>
      <Nav />
      <Typing speed={50}>
        <H1>Francisco Martinez Jr</H1>
      </Typing>
    </div>
  );
}

export default Homepage;

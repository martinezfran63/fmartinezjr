import React from 'react';
import Typing from 'react-typing-animation';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Red+Hat+Text&display=swap');
    font-family: 'Red Hat Text', sans-serif;
  }
  `

const H1 = styled.h1`
font-weight: bold;
color: black;
font-size: 6em
margin: 0.5rem 1rem;
`;


function App() {
  return (
   <Typing speed={50}>
     <GlobalStyles />
    <H1>Francisco Martinez Jr</H1>
  </Typing>
  );
}

export default App;



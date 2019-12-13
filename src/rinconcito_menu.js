import React from "react";
import Menu_1 from "./images/menu_1_frutuas_preparadas.jpg";
import styled from "styled-components";

const Image = styled.img`
    background-size:contain;
    background-position:top;
    background: cover;
`;


function Rinconcito_Menu() {

  return (
  <Image src={Menu_1} alt="Menu_1" />
  )

}

export default Rinconcito_Menu;

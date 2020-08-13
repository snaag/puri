import React from "react";
import puri_logo from "./image/Puri_logo_black.png";
import styled, { css } from "styled-components";

const Header = styled.div`
  background: black;
  height: 4rem;
  margin: 0px;
  border: 0px;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <a href="#">
          <img src={puri_logo} alt="Puri logo" width="100px" />
        </a>
      </Header>
    </div>
  );
}

export default App;

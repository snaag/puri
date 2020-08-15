import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import puri_logo from '../../image/Puri_logo_black.png';

const Header = styled.div`
  background: black;
  height: 4rem;
  margin: 0px;
  border: 0px;
`;

const Navigation = () => {
  return (
    <Header>
      <Link href="#">
        <img src={puri_logo} alt="Puri logo" width="100px" />
      </Link>
    </Header>
  );
};

export default Navigation;

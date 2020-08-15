import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Index, Main, Result } from './components/index';

import styled, { css } from 'styled-components';
import puri_logo from './image/Puri_logo_black.png';

// import Index from "./components/Index/index"
// import Main from "./components/Main/main"
// import Result from "./components/Result/result"

const Header = styled.div`
  background: black;
  height: 4rem;
  margin: 0px;
  border: 0px;
`;

const App = () => {
  return (
    <div className="App">
      <Header>
        <Link to="/">
          <img src={puri_logo} alt="Puri logo" width="100px" />
        </Link>
      </Header>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/main" component={Main} />
        <Route path="/result" component={Result} />
        {/* <Route path="/notes" component={Notes} /> */}
      </Switch>
    </div>
  );
};

export default App;

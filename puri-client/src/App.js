import React, { Component } from "react";
import styled, { css } from "styled-components";
import puri_logo from "./image/Puri_logo_black.png";
import {Route, Router, Switch} from "react-router-dom";
import {Index, Main, Result} from './components/index';

// import Index from "./components/Index/index"
// import Main from "./components/Main/main"
// import Result from "./components/Result/result"

const Header = styled.div`
  background: black;
  height: 4rem;
  margin: 0px;
  border: 0px;
`;

// function App() {
//   return (
//     <div className="App">
//       <Header>
//         <a href="#">
//           <img src={puri_logo} alt="Puri logo" width="100px" />
//         </a>
//         <Index />
//         <Main />
//         <Result />
//       </Header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <a href="#">
            <img src={puri_logo} alt="Puri logo" width="100px" />
          </a>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/main" component={Main} />
            <Route path="/result" component={Result} />
          </Switch>
        </Header>
      </div>
    );
  }
}

export default App;

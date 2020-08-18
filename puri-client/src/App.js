import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Navigation } from './components';
import { Index, Main, Result, ReviewNote } from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/main" component={Main} />
          <Route path="/result" component={Result} />
          <Route path="/reviewnote" component={ReviewNote} />
        </Switch>
      </div>
    );
  }
}

export default App;

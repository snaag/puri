import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import NotesPage from './pages/ResultPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/main" component={MainPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/reviewnotes" component={NotesPage} />
        {/* /@:username */}
      </Switch>
    </>
  );
};

export default App;

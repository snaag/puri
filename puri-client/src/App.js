import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import NotesPage from './pages/NotesPage';
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/main" component={MainPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/reviewnotes" component={NotesPage} />
        <Route path="/notedetail" component={NoteDetailPage} />
      </Switch>
    </>
  );
};

export default App;

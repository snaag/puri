import React from 'react';

import Header from '../components/header/Header';
import NotesTemplate from '../components/notes/NotesTemplate';
import NotesForm from '../components/notes/NotesForm';

const NotesPage = (props) => {
  const { history } = props;

  return (
    <>
      <NotesTemplate>
        <Header />
        <NotesForm history={history} />
      </NotesTemplate>
    </>
  );
};

export default NotesPage;

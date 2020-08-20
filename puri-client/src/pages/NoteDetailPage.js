import React from 'react';

import Header from '../components/header/Header';
import DetailTemplate from '../components/NoteDetail/DetailTemplate';
import DetailForm from '../components/NoteDetail/DetailForm';

const NotesPage = ({ history }) => {
  return (
    <>
      <DetailTemplate>
        <Header />
        <DetailForm history={history} />
      </DetailTemplate>
    </>
  );
};

export default NotesPage;

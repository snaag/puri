import React from 'react';

import Header from '../components/header/Header';
import MainTemplate from '../components/main/MainTemplate';
import UploadForm from '../components/main/UploadForm';

const MainPage = (props) => {
  const { history } = props;

  return (
    <>
      <MainTemplate>
        <Header />
        <UploadForm history={history} />
      </MainTemplate>
    </>
  );
};

export default MainPage;

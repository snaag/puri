import React from 'react';

import Header from '../components/header/Header';
import ResultTemplate from '../components/result/ResultTemplate';
import ResultForm from '../components/result/ResultForm';

const ResultPage = (props) => {
  const { history } = props;

  return (
    <>
      <ResultTemplate>
        <Header />
        <ResultForm history={history} />
      </ResultTemplate>
    </>
  );
};

export default ResultPage;

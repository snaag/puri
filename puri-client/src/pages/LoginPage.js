import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = (props) => {
  const { history } = props;

  return (
    <AuthTemplate>
      <AuthForm history={history} />
    </AuthTemplate>
  );
};

export default LoginPage;

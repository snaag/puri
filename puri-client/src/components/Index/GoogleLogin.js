import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
  const { onLoginGoogleSuccress } = props;
  return (
    <div className="login">
      <GoogleLogin
        clientId="354898664672-v572qf68pk7nacbunjdr3g6u2f52dipn.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={(result) => onLoginGoogleSuccress(result)}
        onFailure={(result) => console.log(result)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;

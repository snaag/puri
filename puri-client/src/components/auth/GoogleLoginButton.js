import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .googleButton {
    background-color: black;
    margin: auto;
    width: 65%;
  }
`;

const GoogleLoginButton = (props) => {
  const { onLoginGoogleSuccress } = props;
  return (
    <StyledDiv>
      <GoogleLogin
        className="googleButton"
        clientId="354898664672-v572qf68pk7nacbunjdr3g6u2f52dipn.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={(result) => onLoginGoogleSuccress(result)}
        onFailure={(result) => console.log(result)}
        cookiePolicy={'single_host_origin'}
      />
    </StyledDiv>
  );
};

export default GoogleLoginButton;

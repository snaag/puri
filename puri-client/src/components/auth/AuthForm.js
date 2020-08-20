import React from 'react';
import axios from 'axios';
import GoogleLoginButton from './GoogleLoginButton';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledHeader = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  letter-spacing: 0.7rem;
  text-align: center;
`;

const StyledUnderLine = styled.div`
  float: center;
  width: 100px;
  margin-top: 20px;
  margin-left: 97px;
  border-bottom: 2px solid red;
`;

const StyledParagraph = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  text-align: center;
  color: ${palette.gray[6]};
`;

const AuthForm = (props) => {
  const { history } = props;

  const onLoginGoogleSuccress = (userInfo) => {
    // userInfo: 구글 로그인 성공시 결과값
    if (userInfo.profileObj === undefined) {
      // 잘못된 결과값(undefined)을 받아왔을 경우
      return; // 이런 경우가 있을 진 모르겠지만, 일단 작성해놓음
    }

    // console.log(userInfo);
    const userProfile = userInfo.profileObj; // userProfile: userInfo 내부에 유저 프로필을 담고 있는 객체

    // userData: 서버로 전송될 유저 데이터
    const userData = {};
    userData.userId = userProfile.googleId;
    userData.password = userInfo.tokenId;
    userData.name = userProfile.name;
    // userData.image = userProfile.imageUrl;

    // console.log(userData);

    const apiUrl =
      'http://ec2-13-125-45-31.ap-northeast-2.compute.amazonaws.com:5000/user/join';
    axios.post(apiUrl, userData).then((result) => {
      console.log('result: ' + result);
      history.push('/main');
    });
  };

  return (
    <>
      <StyledHeader>Puri 로그인하기</StyledHeader>
      <StyledUnderLine />
      <StyledParagraph>
        Puri를 통해 나의 풀이 중<br />
        실수한 부분을 쉽게 찾아보세요!
      </StyledParagraph>
      <GoogleLoginButton onLoginGoogleSuccress={onLoginGoogleSuccress} />
    </>
  );
};

export default AuthForm;

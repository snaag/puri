import React from 'react';
import axios from 'axios';

import GoogleLogin from './GoogleLogin';

import styled, { css } from 'styled-components';
import Puri_logo from '../../image/Puri_logo.png';

const IndexDiv = styled.div`
  padding-top: 60px;
`;

function Index(props) {
  const { history } = props;

  const onLoginGoogleSuccress = (userInfo) => {
    // userInfo: 구글 로그인 성공시 결과값
    if (userInfo.profileObj === undefined) {
      // 잘못된 결과값(undefined)을 받아왔을 경우
      return; // 이런 경우가 있을 진 모르겠지만, 일단 작성해놓음
    }

    console.log(userInfo);
    const userProfile = userInfo.profileObj; // userProfile: userInfo 내부에 유저 프로필을 담고 있는 객체

    const userData = {}; // userData: 서버로 전송될 유저 데이터
    userData.userId = userProfile.googleId;
    userData.password = userInfo.tokenId;
    userData.name = userProfile.name;
    // userData.image = userProfile.imageUrl;

    // console.log(userData);

    const apiUrl =
      'http://ec2-13-209-89-148.ap-northeast-2.compute.amazonaws.com:5000/user/join';
    axios.post(apiUrl, userData).then((result) => {
      console.log('result: ' + result);
      history.push('/main');
    });
  };

  return (
    <IndexDiv className="index-page">
      <img
        src={Puri_logo}
        className="puri_logo"
        height="150"
        width="auto"
        alt="logo"
      />
      <GoogleLogin onLoginGoogleSuccress={onLoginGoogleSuccress} />
    </IndexDiv>
  );
}

export default Index;

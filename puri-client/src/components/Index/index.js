import React from 'react';
import axios from 'axios';

import Login from './Login';

import Puri_logo from '../../image/Puri_logo.png';

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

    const apiUrl = 'https://c213d862-4034-4256-a0d4-c7627253ca6c.mock.pstmn.io';
    axios.post(apiUrl, userData).then((result) => {
      // console.log('result: ' + result);
      history.push('/Main');
    });
  };

  return (
    <div className="index-page">
      <img
        src={Puri_logo}
        className="puri_logo"
        width="100"
        height="100"
        alt="logo"
      />
      <Login onLoginGoogleSuccress={onLoginGoogleSuccress} />
    </div>
  );
}

export default Index;

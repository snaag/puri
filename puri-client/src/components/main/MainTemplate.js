/* 메인 페이지의 레이아웃을 담당하는 컴포넌트 */

import React from 'react';
import styled from 'styled-components';

// 화면 전체를 채움
const StlyedUploadTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 배경화면 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
    url('https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

// 흰색 박스
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 25px rgba(0, 0, 0, 1);
  padding: 2rem;
  width: 1200px;

  background: white;
  border-radius: 10px;
`;

const MainTemplate = ({ children }) => {
  return (
    <StlyedUploadTemplate>
      <WhiteBox>{children}</WhiteBox>
    </StlyedUploadTemplate>
  );
};

export default MainTemplate;

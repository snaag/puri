import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UploadButton from './UploadButton';
import SolutionButton from './SolutionButton';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import exampleImage from '../../lib/image/image_example.jpg';

const StyledHeader = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-align: center;

  :after {
    content: '';
    display: block;
    width: 80px;
    border-bottom: 2px solid red;
    margin: 15px auto;
  }
`;

const StyledParagraph = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  text-align: center;
  color: ${palette.gray[6]};
`;

const StyledImageBlock = styled.div`
  border: 1.2px solid gray;
  height: 350px;
  width: 350px;
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  margin-left: 394px;
  text-align: center;
  color: ${palette.gray[6]};
`;

const UploadForm = ({ history }, props) => {
  const userId = props.history.location.state.user;

  const [img, setImg] = useState(exampleImage);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [key, getKey] = useState('');
  const url = 'http://localhost:3004/upload';

  /* 파일 업로드 함수 */
  const uploadFile = async (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    // setUploadedImg(file);
    reader.onloadend = await function () {
      setImg(reader.result);
      localStorage.setItem('upload', JSON.stringify(reader.result));
    };
    reader.readAsDataURL(file);
    const data = new FormData();
    data.append('file', file);
    await axios
      .post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => getKey(res.data.key));
  };

  const isImageUploaded = () => {
    setIsUploaded(!isUploaded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      key: key,
    };
    axios
      .post('http://localhost:3004/result', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => console.log(res));
    // await history.push({
    //   pathname: '/result',
    //   state: { user: userId },
    // });
  };

  // const data = new FormData();
  // data.append('file', uploadedImg);
  // data.append('filename', uploadedImg.name);
  // const url = 'http://localhost:3004/upload';
  // await axios.post(url, data, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // })
  // .then(res=>console.log(res));
  // await history.push({
  //   pathname:'/result',
  //   state:{user:userId}
  // });

  return (
    <>
      <StyledHeader>풀이 등록</StyledHeader>
      <StyledParagraph>틀린 풀이를 사진을 찍어 업로드해보세요!</StyledParagraph>
      <StyledImageBlock>
        <img
          src={img}
          className="upload_picture"
          height="348"
          width="348"
          alt="upload"
        />
      </StyledImageBlock>
      <UploadButton uploadFile={uploadFile} isImageUploaded={isImageUploaded} />
      <SolutionButton handleSubmit={handleSubmit} />
    </>
  );
};

export default UploadForm;

import React, { useState } from 'react';
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
`;

const StyledUnderLine = styled.div`
  float: center;
  width: 100px;
  margin-top: 20px;
  text-align: center;
  margin-left: 514px;
  border-bottom: 2px solid red;
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

const UploadForm = (props) => {
  const { history } = props;

  const [img, setImg] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(exampleImage);
  const [isUploaded, setIsUploaded] = useState(false);

  /* 파일 업로드 함수 */
  const uploadFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    setUploadedImg(file);
    reader.onloadend = function () {
      setImg(reader.result);
      localStorage.setItem('upload', JSON.stringify(reader.result));
    };
    reader.readAsDataURL(file);
  };

  const isImageUploaded = () => {
    setIsUploaded(!isUploaded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', uploadedImg);
    data.append('filename', uploadedImg.name);
    const url = 'http://localhost:3004/upload';
    await axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    await history.push('/result');
  };

  // useEffect(()=>{
  // })

  return (
    <>
      <StyledHeader>풀이 등록</StyledHeader>
      <StyledUnderLine />
      <StyledParagraph>틀린 풀이를 사진을 찍어 업로드해보세요!</StyledParagraph>
      <StyledImageBlock>
        <img
          src={uploadedImg}
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

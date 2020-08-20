import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TagBlock from './TagBlock';
import CommentBlock from './CommentBlock';
import SaveButton from './SaveButton';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledHeader = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-align: center;

  :after {
    content: '';
    display: block;
    width: 90px;
    border-bottom: 2px solid red;
    margin: 15px auto;
  }
`;

const StyledParagraph = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;
  color: ${palette.gray[6]};
`;

const UploadImageBlock = styled.div`
  display: inline-block;
  border: 1.2px solid gray;
  height: 350px;
  width: 350px;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  margin-left: 195px;
  text-align: center;
  color: ${palette.gray[6]};
`;

const ResultImageBlock = styled.div`
  display: inline-block;
  border: 1.2px solid gray;
  height: 350px;
  width: 350px;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  margin-left: 50px;
  text-align: center;
  color: ${palette.gray[6]};
`;

const ResultForm = ({ history }) => {
  const [tags, setTags] = useState([]);
  const [comment, setComment] = useState('');
  const [img, getImage] = useState('');
  // const [picUrl, getPicUrl] = useState('')
  const userInfo = history.location.state.user;
  // let addedTags = [];

  useEffect(() => {
    getImage(JSON.parse(localStorage.getItem('upload')));
    // axios.get('http://localhost:3004/upload').then((res) => {
    //   // console.log(typeof res.data.location);
    //   getPicUrl(res.data.location);
    // });
  }, []);

  const handleTags = (data) => {
    setTags(() => {
      tags.push(`#${data}`);
      return tags;
    });
  };

  const handleComment = (data) => {
    setComment(data);
  };

  // '오답노트 저장' 버튼 클릭 시 실행
  // const [url1, setURL1] = useState('');
  // const [url2, setURL2] = useState('');
  // S3 업로드 및 url 받아옴
  // axios.get('http://localhost:3004/upload').then((res) => {
  //   console.log(res.data.location);
  //   setURL1(res.data.location);
  // });
  const handleSaveNote = async (e) => {
    e.preventDefault();
    const noteData = {};
    noteData.user_userId = userInfo;
    // noteData.picUrl = picUrl;
    noteData.resultText = 'resultText';
    noteData.comment = comment;
    noteData.review = false;
    noteData.tags = tags;
    console.log(noteData);
    // 서버
    await axios.post('http://localhost:3004/note', noteData).then((result) => {
      console.log('result: ' + result);
    });
    // 오답노트 페이지로 이동
    await history.push({
      pathname: '/notes',
      state: { user: userInfo },
    });
  };

  return (
    <>
      <StyledHeader>Puri Check!</StyledHeader>
      <StyledParagraph>Puri가 체크한 잘못된 부분입니다!</StyledParagraph>
      <div>
        <UploadImageBlock className="uploadImage">
          <img
            src={img}
            className="upload_picture"
            height="348"
            width="348"
            alt="upload"
          />
        </UploadImageBlock>
        <ResultImageBlock className="resultText">
          <img
            src={null}
            className="upload_picture"
            height="348"
            width="348"
            alt="upload"
          />
        </ResultImageBlock>
      </div>
      {/* <TagBlock tags={tags} handleTags={handleTags} /> */}
      <TagBlock handleTags={handleTags} />
      <CommentBlock handleComment={handleComment} />
      <SaveButton handleSaveNote={handleSaveNote} />
    </>
  );
};

export default ResultForm;

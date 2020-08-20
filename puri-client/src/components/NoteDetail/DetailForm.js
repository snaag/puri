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

const DetailForm = ({ history }) => {
  const [tags, setTags] = useState('');
  const [comment, setComment] = useState('');
  const [img, getImg] = useState('');

  useEffect(() => {
    getImg(JSON.parse(localStorage.getItem('upload')));
  }, []);

  let addedTags = [];

  const handleTags = (e) => {
    e.preventDefault();

    setTags(() => {
      addedTags.push(e.target.value);
      return addedTags;
    });
    console.log(tags);
  };

  const handleComment = (e) => {
    console.log(comment);
    setComment(e.target.value);
  };

  // '오답노트 저장' 버튼 클릭 시 실행
  // const [url1, setURL1] = useState('');
  // const [url2, setURL2] = useState('');
  const handleSaveNote = async (e) => {
    e.preventDefault();

    // S3 업로드 및 url 받아옴
    // axios.get('http://localhost:3004/upload').then((res) => {
    //   console.log(res);
    //   setURL1(res.data.location);
    // });

    const noteData = {};
    noteData.picUrl = '/';
    noteData.resultText = 'resultText';
    noteData.comment = comment;
    noteData.review = false;
    noteData.tags = tags;

    // 서버
    await axios.post('http://localhost:3004/note', noteData).then((result) => {
      console.log('result: ' + result);
    });

    // 오답노트 페이지로 이동
    await history.push('/notes');
  };

  const dataUrl = 'http://localhost:3004/note';
  const [data, getData] = useState('');

  useEffect(() => {
    axios
      .get(dataUrl, {
        headers: {
          Authorization: 'snaag', //google id로 구분
          // note_id: location.state.result.id,
        },
      })
      .then((res) => {
        getData(res.data);
        setTags(
          res.data.tags.map((x) => {
            return `#${x.tagname}`;
          }),
        );
      });
  }, []);

  return (
    <>
      <StyledHeader>Puri Check!</StyledHeader>
      <StyledParagraph>Puri가 체크한 잘못된 부분입니다!</StyledParagraph>
      <div>
        <UploadImageBlock className="uploadImage">
          <img
            src={null}
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
      <TagBlock tags={tags} handleTags={handleTags} />
      <CommentBlock handleComment={handleComment} />
      <SaveButton handleSaveNote={handleSaveNote} />
    </>
  );
};

export default DetailForm;

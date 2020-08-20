import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTagBlock = styled.div`
  display: inline-block;
  /* border: 1.2px solid black; */
  width: 350px;
  /* margin-bottom: 1.75rem; */
  margin-left: 195px;
`;

const StyledHeader = styled.div`
  display: inline-block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  margin-left: 10px;
`;

const UnderLine = styled.div`
  /* float: left; */
  width: 100px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 7px;
  border-bottom: 2px solid red;
`;

const RegisteredTags = styled.div`
  display: inline-block;
  /* border: 1.2px solid none; */
  background-color: #f0f0f0;
  height: 37px;
  line-height: 37px;
  width: 350px;
  text-align: left;
  border-radius: 2px;
  font-size: 0.8em;
  font-weight: bold;
  max-width: 350px;
`;

const TagInputBlock = styled.div`
  display: inline-block;
  /* float: center; */
  input {
    width: 297px;
    /* height: 1.75em; */
  }
`;

const RegisterButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0.4em 0.2em;
  color: black;
  /* font-weight: bold; */
  font-size: 10px;
  line-height: normal;
  vertical-align: middle;
  background-color: #d0d0d0;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-bottom-color: #afafaf;
  border-right-color: #afafaf;
  border-radius: 0.3em;

  :hover {
    background-color: #efefef;
  }
`;

const TagBlock = ({ tags, handleTags }) => {
  const [inputTag, setInputTag] = useState('');
  // const [allTags, setAlltags] = useState('');

  let allTags = '';
  for (let i = 0; i < tags.length; i++) {
    const eachTag = '#' + tags[i] + ' ';
    allTags += eachTag;
  }

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  const handleInputTag = (e) => {
    setInputTag(e.target.value);
  };

  return (
    <StyledTagBlock>
      <StyledHeader>Tags</StyledHeader>
      <UnderLine />
      {/* (추가) 최대 글자수, 태그 수 제한 */}
      <RegisteredTags>{allTags}</RegisteredTags>
      <TagInputBlock>
        {/* (추가) 버튼 클릭시 input 초기화 */}
        <input
          type="text"
          className="input-tag"
          placeholder="태그를 입력하세요"
          onChange={handleInputTag}
        />
        <RegisterButton type="submit" onClick={handleTags} value={inputTag}>
          태그 등록
        </RegisterButton>
      </TagInputBlock>
    </StyledTagBlock>
  );
};

export default TagBlock;

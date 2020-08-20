import React, { useState } from 'react';

import styled from 'styled-components';

const StyledCommentBlock = styled.div`
  display: inline-block;
  /* border: 1.2px none black; */
  width: 350px;
  /* margin-bottom: 1.75rem; */
  margin-left: 55px;
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
  width: 170px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 7px;
  border-bottom: 2px solid red;
`;

const CommentInputBlock = styled.div`
  display: inline-block;
  /* float: left; */
  textarea {
    resize: none;
    overflow: hidden;
    width: 350px;
    height: 60px;
    /* text-align: top left; */
  }
`;

const CommentBlock = (props) => {
  const [count, getCount] = useState(0)

  const handleInputComment= (e) => {
    getCount(e.target.value.length)
    props.handleComment(e.target.value)
    if(e.target.value.length > 50){
      alert("50자 이하로 작성 바랍니다.")
    }
  }

  return (
    <StyledCommentBlock>
      <StyledHeader>Comments</StyledHeader>
      <UnderLine />
      <CommentInputBlock>
        {/* (추가) 글자 수 제한 */}
        {count > 50 ? (
          <span backgroundcolor="red">글자수: {`${count}/50자이내`}</span>
        ) : (
          <span>글자수: {`${count}/50자이내`}</span>
        )}
        <textarea
          className="input-comment"
          placeholder="필요한 코멘트를 작성해주세요."
          onChange={handleInputComment}
        />
      </CommentInputBlock>
    </StyledCommentBlock>
  );
};

export default CommentBlock;

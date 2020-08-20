import React from 'react';

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

const CommentBlock = ({ handleComment }) => {
  return (
    <StyledCommentBlock>
      <StyledHeader>Comments</StyledHeader>
      <UnderLine />
      <CommentInputBlock>
        {/* (추가) 글자 수 제한 */}
        <textarea
          className="input-comment"
          placeholder="필요한 코멘트를 작성해주세요."
          onChange={handleComment}
        />
      </CommentInputBlock>
    </StyledCommentBlock>
  );
};

export default CommentBlock;

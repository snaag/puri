import React from 'react';

import styled from 'styled-components';

const StlyedSaveButton = styled.button`
  display: inline-block;
  margin-left: 504px;

  display: inline-block;
  padding: 0.5em 0.75em;
  color: #990000;
  font-weight: bold;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-bottom-color: #afafaf;
  border-right-color: #afafaf;
  border-radius: 0.3em;

  :hover {
    background-color: #efefef;
  }
`;

const SaveButton = ({ handleSaveNote }) => {
  return (
    <form>
      <StlyedSaveButton onClick={handleSaveNote}>
        오답노트 저장
      </StlyedSaveButton>
    </form>
  );
};

export default SaveButton;

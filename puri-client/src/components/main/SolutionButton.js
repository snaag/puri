import React from 'react';
import styled from 'styled-components';

// const StlyedUploadButton = styled.button``;

const StyledSolutionButton = styled.form`
  display: inline-block;
  margin-left: 50px;

  label {
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
  }

  /* submit 필드 숨기기 */
  input[type='submit'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const UploadButton = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledSolutionButton>
      <label for="solution">Solution!</label>
      <input
        type="submit"
        id="solution"
        value="solution"
        className="submit-button"
        onClick={handleSubmit}
      />
    </StyledSolutionButton>
  );
};

export default UploadButton;

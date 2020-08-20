import React from 'react';
import styled from 'styled-components';

const StyledUploadInput = styled.div`
  display: inline-block;
  margin-left: 415px;

  label {
    display: inline-block;
    padding: 0.5em 0.75em;
    /* margin-bottom: 1em; */
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

  /* file 필드 숨기기 */
  input[type='file'] {
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
  const { uploadFile } = props;

  return (
    <StyledUploadInput>
      <label for="upload-file">풀이 사진 업로드</label>
      <input type="file" id="upload-file" name="file" onChange={uploadFile} />
    </StyledUploadInput>
  );
};

export default UploadButton;

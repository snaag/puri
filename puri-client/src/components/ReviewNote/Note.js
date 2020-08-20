import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import exampleImg from '../../lib/image/note_example.png';

const NoteBlock = styled.div`
  max-height: 500px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  :hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  article {
    padding: 20px;
    display: flex;

    flex: 1;
    justify-content: space-between;
    flex-direction: column;
  }
  .thumb {
    /* background-image: url($ {result.picUrl}); */
    background-image: url(${exampleImg});
    padding-bottom: 60%;
    background-position: center center;
  }

  p {
    flex: 1; /* make p grow to fill available space*/
    line-height: 1.4;
  }

  h1 {
    font-size: 15px;
    margin: 0;
    color: #333;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 2em 0 0 0;
  }
`;

const Note = ({ noteData, history }) => {
  const listClick = (data) => {
    history.push({
      pathname: '/notedetail',
      state: { result: data },
    });
  };

  return (
    // <NoteBlock onClick={() => listClick(noteData)}>
    //   <div className="thumb"></div>
    //   <article>
    //     <h1>{noteData.comment}</h1>
    //     <span>#일차함수</span>
    //   </article>
    // </NoteBlock>

    <NoteBlock onClick={() => listClick(noteData)}>
      <div className="thumb"></div>
      <article>
        <h1>2를 3으로 잘못 봄..</h1>
        <span>#일차함수 #계산실수</span>
      </article>
    </NoteBlock>
  );
};

export default Note;

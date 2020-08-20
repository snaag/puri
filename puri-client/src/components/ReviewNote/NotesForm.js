import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './Note';

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
    width: 70px;
    border-bottom: 2px solid red;
    margin: 15px auto;
    margin-bottom: 30px;
  }
`;

const NoteAlbumBlock = styled.div`
  width: 1000px;
  /* max-width: 1280px; */
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  /* @media only screen and (min-width: 500px) {
    .band {
      grid-template-columns: 1fr 1fr;
    }
    .item-1 {
      grid-column: 1 / span 2;
    }
    .item-1 h1 {
      font-size: 30px;
    }
  } */

  @media only screen {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const NoDataParagraph = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  text-align: center;
  color: ${palette.gray[6]};
`;

const NotesForm = ({ history, location }) => {
  const [notesData, getNotesData] = useState('');
  // console.log(location.state.user); //google userinfo id

  // const userinfoUrl = 'http://localhost:3004/user';
  useEffect(() => {
    axios
      .get('http://localhost:3004/notes', {
        headers: {
          Authorization: 'snaag', //google userinfo 로
        },
      })
      .then((res) => {
        getNotesData(res.data);
      });
    // axios.get(userinfoUrl).then(res=>console.log(res))
  }, []);

  return (
    <>
      <StyledHeader>오답노트</StyledHeader>

      {/* {notesData.length === 0 ? (
        <NoDataParagraph>저장된 노트가 없습니다!</NoDataParagraph>
      ) : (
        <NoteAlbumBlock>
          {notesData.map((noteData) => (
            <Note noteData={noteData} key={noteData.id} history={history} />
          ))}
        </NoteAlbumBlock>
      )} */}

      <NoteAlbumBlock>
        <Note history={history} />
        <Note history={history} />
        <Note history={history} />
      </NoteAlbumBlock>
    </>
  );
};

export default NotesForm;

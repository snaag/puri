import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import puri_logo from '../../lib/image/Puri_logo_black.png';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: black;
  height: 50px;
  margin: 0px;
  border: 0px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 100);

  .logo {
    float: left;
    margin-top: 9px;
    margin-left: 1vw;
    height: 30px;
    width: auto;
  }

  button,
  button::after {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  button {
    display: flex;
    float: right;
    background: none;
    border: 2px solid #cf0000;
    border-radius: 5px;
    color: #e0e0e0;
    /* display: block; */
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 1.1vw;
    padding: 0.4em 1.5em;
    position: relative;
    letter-spacing: 2px;
    /* text-transform: uppercase; */
  }

  button::before,
  button::after {
    background: #e0e0e0;
    content: '';
    position: absolute;
    z-index: -1;
  }

  button:hover {
    color: black;
  }

  button::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }

  button:hover:after {
    height: 100%;
  }
`;

const RedLabel = styled.div`
  display: inline-block;
  background-color: #bf0000;
  width: 85px;
  height: 49.8px;
  margin-left: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 20);
  border-radius: 0.7px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/main">
        <img className="logo" src={puri_logo} alt="Puri logo" />
      </Link>
      <RedLabel />
      <Link to="/">
        <button>로그아웃</button>
      </Link>
      <Link to="/reviewnotes">
        <button>오답노트</button>
      </Link>
    </StyledHeader>
  );
};

export default Header;

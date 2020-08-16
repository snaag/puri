import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import puri_logo from '../../image/Puri_logo_black.png';

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: black;
  height: 70px;
  margin: 0px;
  border: 0px;

  .label {
    width: 10;
    background-color: red;
  }

  .home {
    float: left;
    margin-top: 12px;
    margin-left: 1vw;
    width: 85px;
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
    border: 2px solid red;
    border-radius: 5px;
    color: #fff;
    /* display: block; */
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
    margin-right: 1.1vw;
    padding: 0.4em 1.5em;
    position: relative;
    /* text-transform: uppercase; */
  }

  button::before,
  button::after {
    background: #fff;
    content: '';
    position: absolute;
    z-index: -1;
  }

  button:hover {
    color: black;
  }

  .mypage::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }

  .mypage:hover:after {
    height: 100%;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <Link to="/">
        <img className="home" src={puri_logo} alt="Puri logo" />
      </Link>
      <div className="label"></div>
      <Link to="#">
        <button className="mypage">마이페이지</button>
      </Link>
      <button className="mypage">로그아웃</button>
      {/* <li className="Mypage">마이페이지</li> */}
      {/* <li className="Logout">로그아웃</li> */}
    </Header>
  );
};

export default Navigation;

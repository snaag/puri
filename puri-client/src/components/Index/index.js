import React from 'react';
import Puri_logo from '../../images/Puri_logo.png'

function Index() {
  return (
    <div className="login-button">
      <img src={Puri_logo} className="puri_logo" width="100" height="100" alt="logo"/>
      <form>
        <button>구글로그인</button>
      </form>  
    </div>
  );
}


export default Index;

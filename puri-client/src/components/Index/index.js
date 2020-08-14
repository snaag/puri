import React from 'react';
import Puri_logo from '../../image/Puri_logo.png'

function Index() {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="index-page">
      <img src={Puri_logo} className="puri_logo" width="100" height="100" alt="logo"/>
      <form onSubmit={handleSubmit}>
        <button>구글로그인</button>
      </form>
    </div>
  );
}

export default Index;

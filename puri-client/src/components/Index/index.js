import React from 'react';
import Puri_logo from '../../image/Puri_logo.png'

function Index({history}) {
  const handleSubmit = async (e) =>{
    e.preventDefault();
    //google login 상태 조건 필요
    await history.push('/main')
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

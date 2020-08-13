import React from 'react';
import Puri_logo from '../../image/Puri_logo.png'

function Main() {
  return (
    <div className="main-page">
      <img src={Puri_logo} className="puri_logo" width="100" height="100" alt="logo"/>
      <img src="" className="upload_picture" width="100" height="100" alt="upload"/>
      <form>
        <button>풀이사진등록</button>
      </form>  
    </div>
  );
}

export default Main;

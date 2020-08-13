import React from 'react';

function Result() {
  return (
    <div className="result-page">
      <span><img src="" className="review" width="100" height="100" alt="review"/></span>
      <span><img src="" className="result" width="100" height="100" alt="result"/></span>
      <input type="text" className="input-tag" placeholder="# tag를 입력하세요" />
      <button>Tag</button>
      <input type="text" className="input-comment" placeholder="오답이유 정리"/>
      <form>
        <button>오답노트저장</button>
      </form>
    </div>
  );
}

export default Result;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comment({history, onComment}) {
   //오답노트 저장 버튼을 눌렀을 때
   const handleReviewNote = ()=>{
    //database에 이미지 저장 => express에서 처리?
    //S3 이미지 삭제 => express 에서 처리?
    //오답노트 페이지로 이동
    history.push('/reviewnote')
  }

  const handleComment = (e)=>{
    onComment(e.target.value)
  }
  
  return (
    <div className="result-page">
        <div>
          <textarea
            type="textarea"
            className="input-comment"
            placeholder="오답이유 정리"
            onChange={handleComment}
          />
          <button>comment</button>
        </div>
      <form>
        <button onClick={handleReviewNote}>오답노트저장</button>
      </form>
    </div>
  );
}

export default Comment;

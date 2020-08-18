import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comment({history, onComment}) {
  const [comments, setComment] = useState('')
  const [isComments, setIsComment] = useState(true)
  // const [addComment, setAddCommetn] = useState('')
   
  // useEffect(() => {}, []);

  const handleReviewNote = async (e) => {
    //오답노트 저장 버튼을 눌렀을 때
    e.preventDefault();
    //database에 이미지 저장 => express에서 처리?
    await axios.post('http://localhost:3004/delete'); //S3 이미지 삭제처리
    await history.push('/reviewnote'); //오답노트 페이지로 이동
  };

  const handleComment = (e)=>{
    setComment(e.target.value)
  }

  const handleCommnetButton = (e) => {
    e.preventDefault();
    onComment(comments)
    setIsComment(!isComments)
  }

  const handleIsCommnetButton = (e) => {
    e.preventDefault();
    setIsComment(!isComments)
  }
  
  return (
    <div className="result-page">
      {isComments ? (
        <div>
        <textarea
          type="textarea"
          className="input-comment"
          placeholder="오답이유 정리"
          onChange={handleComment}
        />
        <button onClick={handleCommnetButton}>Comment</button>
      </div>
      ) : (
        <div>
          <button onClick={handleIsCommnetButton}>Comment 수정</button>
        </div>
      )}
      <form>
        <button onClick={handleReviewNote}>오답노트저장</button>
      </form>
    </div>
  );
}

export default Comment;

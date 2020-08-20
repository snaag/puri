import React, { useEffect, useState } from 'react';

function ReviewNoteEntry({result, history}) {

  const listClick = (data)=>{
    history.push({
      pathname:'/reviewdetail', 
      state: {result: data}
    })
  }

  return (
    <div className="reviewnoteEntry" onClick={()=>listClick(result)}>
      <img src={result.picUrl} alt="오답"/>
      <div>
        Comment : {result.comment}
      </div>
      <div>
        <label>Review</label>
        <input type="checkbox" />
      </div>     
    </div>
  );
}

export default ReviewNoteEntry;

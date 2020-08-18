import React, { useEffect, useState } from 'react';

function Tags({onTags}) {

  const handleTags = (e)=>{
    onTags(e.target.value)
  }

  const handleTagsButton = () => {
    
  }

  return (
    <div className="result-page">
      <div>
        <input
          type="text"
          className="input-tag"
          placeholder="# tag를 입력하세요"
          onChange={handleTags}
        />
        <button onClick={handleTagsButton}>Tag</button>
      </div>
    </div>
  );
}

export default Tags;

import React, { useEffect, useState } from 'react';

function Tags({onTags}) {
  const [tags, setTags] = useState('')
  const [isTag, setIsTag] = useState(true)

  const handleTags = (e)=>{
    setTags(e.target.value)
  }

  const handleTagsButton = (e) => {
    e.preventDefault();
    onTags(tags)
    setIsTag(!isTag)
  }

  const handleIsTagsButton = (e) =>{
    e.preventDefault();
    setIsTag(!isTag)
  }

  return (
    <div className="result-page">
      {isTag ? (
        <div>
          <input
            type="text"
            className="input-tag"
            placeholder="# tag를 입력하세요"
            onChange={handleTags}
          />
          <button onClick={handleTagsButton}>Tag</button>
        </div>
      ) : (
        <div>
          <button onClick={handleIsTagsButton}>Tag 수정</button>
        </div>
      )}
    </div>
  );
}

export default Tags;

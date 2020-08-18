import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tags from './Tags';
import Comment from './Comment';
import Print from './Print';

function Result({history}) {
  const url = "http://localhost:3004/upload";
  const [url1, setURL1] = useState('')
  // const [url2, setURL2] = useState('')
  const [tags, setTags] = useState('')
  const [comments, setComment] = useState('')

  useEffect(()=>{
    axios.get(url).then(res=>{
      console.log(res)
      setURL1(res.data.location)
    })
  }, [])

   //await axios.get(url2)
    // .then(res=>console.log(res))
    // .then(setURL2(data2)) 업로드 파일을 계산한 값을 불러온다. 그리고 img src="url2"
    // })

    const handleTags = (tag) => {
      setTags(tag)
    }

    const handleComment = (comment) => {
      setComment(comment)
    }
  
  return (
    <div className="result-page">
      <span>
        <img
          src={url1}
          className="review"
          width="200"
          height="320"
          alt="review"
        />
      </span>
      <span>
        <img src="" className="result" width="100" height="100" alt="result" />
      </span>
      <Print tags={tags} comment={comments}/>
      <Tags onTags={handleTags}/>
      <Comment onComment={handleComment}/>
    </div>
  );
}

export default Result;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Result() {
  // const [url1, setURL1] = useState('')
  // const [url2, setURL2] = useState('')

  // useEffect(async ()=>{
    //await axios.get(url1)
    // .then(res=>console.log(res))
    // .then(setURL1(data1)) 업로드 파일을 불러온다.그리고 img src ="url1"

    //await axios.get(url2)
    // .then(res=>console.log(res))
    // .then(setURL2(data2)) 업로드 파일을 계산한 값을 불러온다. 그리고 img src="url2"
  // })
  
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

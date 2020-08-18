import React, { useEffect, useState } from 'react';
import ReviewNoteEntry from './ReviewNoteEntry';
import axios from 'axios';

function ReviewNote() {
  const [url3, setURL3] = useState('')

  useEffect(()=>{
    // axios.get(url).then(res=>{
    //   console.log(res.data)
      //res.data.Contents => 배열형태의 data를 가지고 있음
      //mapping으로 출력
      //component로 entry 출력하는 방식으로 ?
      //<img src = "https://s3.ap-northeast-2.amazonaws.com/버킷이름/파일이름.png" alt="">
      //region, bucket 알고있고 고정값, 파일이름은 key 값으로 저장 되어 있음 region,bucket은 env나 숨기는 값으로
      //<ReviewNoteEntry data={} key={}/>
    // })
  })
   
  return (
    <div className="result-page">
      <ReviewNoteEntry />
    </div>
  );
}

export default ReviewNote;
import React, { useEffect, useState } from 'react';
import ReviewNoteEntry from './ReviewNoteEntry';
import axios from 'axios';

function ReviewNote({history, location}) {
  const datasUrl = 'http://localhost:3004/notes';
  // const userinfoUrl = 'http://localhost:3004/user';
  const [data, getData] = useState('');

  console.log(location.state.user)//google userinfo id 
  
  useEffect(() => {
    axios
      .get(datasUrl, {
        headers: {
          Authorization: 'snaag',//google userinfo 로 
        },
      })
      .then((res) => {
        getData(res.data);
      });
    // axios.get(userinfoUrl).then(res=>console.log(res))
  }, []);

  return(
    data.length === 0 ? (<div>loading..</div>):(
    <div className="reviewnote">
      {data.map(list => <ReviewNoteEntry result={list} key={list.id} history={history}/>)}
    </div>
   )
  )
}

export default ReviewNote;

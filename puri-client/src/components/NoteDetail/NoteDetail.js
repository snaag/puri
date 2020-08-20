import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewDetail({ location }) {
  const dataUrl = 'http://localhost:3004/note';
  const [data, getData] = useState('');
  const [tags, getTags] = useState('');

  useEffect(() => {
    axios
      .get(dataUrl, {
        headers: {
          Authorization: 'snaag', //google id로 구분
          note_id: location.state.result.id,
        },
      })
      .then((res) => {
        getData(res.data);
        getTags(
          res.data.tags.map((x) => {
            return `#${x.tagname}`;
          }),
        );
      });
  }, []);

  return !data ? (
    <div>Loading</div>
  ) : (
    <div className="reviewdetail">
      {data.note.id}
      <img src={data.note.picUrl} alt="오답" />
      <div>Tags : {tags}</div>
      <div>Comment : {data.note.comment}</div>
      <div>Result : {data.note.resultText}</div>
      <div>
        <label>Review</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default ReviewDetail;

import React, { useEffect, useState } from 'react';
import Tags from './Tags';

function Print({tags, comment}) {
  return (
    <div className="result-page">
      {tags === '' ? <div></div> : <div>Tags : {tags}</div>}
      {comment === '' ? <div></div> : <div>Comment : {comment}</div>}
    </div>
  );
}

export default Print;

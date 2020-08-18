import React, { useEffect, useState } from 'react';

function Print({tags, comment}) {
  return (
    <div className="result-page">
      <div>
        Tags : {tags}
      </div>
      <div>
        Comments : {comment}
      </div>
    </div>
  );
}

export default Print;

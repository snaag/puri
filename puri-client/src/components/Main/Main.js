import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import Puri_logo from '../../image/Puri_logo.png';
import Example from '../../image/example1.jpg';

function Main({ history }) {
  const [img, setImage] = useState(null);
  const [value, setValue] = useState('풀이과정등록');

  const uploadFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = function () {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handlebutton = () => {
    setValue('Solution');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', img);
    // await axios.post(url, data) //url과 객체형태의 data = {}
    // .then(res=>console.log(res.statusText))
    // await <Route path='/result' />
    await history.push('/result');
  };

  // useEffect(()=>{
  // })

  return (
    <div className="main-page">
      <div>
        <img
          src={Puri_logo}
          className="puri_logo"
          width="100"
          height="100"
          alt="logo"
        />
      </div>
      <div>
        {img === null ? (
          <img
            src={Example}
            className="upload_picture"
            width="200"
            height="320"
            alt="upload"
          />
        ) : (
          <img
            src={img}
            className="upload_picture"
            width="200"
            height="320"
            alt="upload"
          />
        )}
      </div>
      {value === '풀이과정등록' ? (
        <input
          type="submit"
          value={value}
          className="submit-button"
          onClick={handlebutton}
        />
      ) : (
        <form>
          <div>
            <input
              type="file"
              className="input-file"
              name="file"
              onChange={uploadFile}
            />
          </div>
          <input
            type="submit"
            value={value}
            className="submit-button"
            onClick={handleSubmit}
          />
        </form>
      )}
    </div>
  );
}

export default Main;

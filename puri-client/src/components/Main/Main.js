import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import Puri_logo from '../../image/Puri_logo.png';
import Example from '../../image/example1.jpg';
import Result from '../Result/Result'

function Main({ history }) {
  const [img, setImage] = useState(null);
  const [uploadImg, setUpload] = useState('');
  const [value, setValue] = useState('풀이과정등록');
  const [newimg, setNewImage] = useState(null);

  const uploadFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    setUpload(file);
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
    data.append('file', uploadImg);
    data.append('filename', uploadImg.name);
    const url = "http://localhost:3004/upload";
    await axios.post(url, data, {
      headers:{
        "Content-Type":'multipart/form-data'
      }
    })
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
        <form encType="multipart/form-data">
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
      {/* <Result data={newimg} />
      <div>
        <img src={newimg} width="100" alt="Hello" />
      </div> */}
    </div>
  );
}

export default Main;

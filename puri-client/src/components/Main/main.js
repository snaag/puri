import React, { useState, useEffect } from 'react';
import Puri_logo from '../../image/Puri_logo.png';
import Example from "../../image/example.jpg";

function Main() {
  const [img, setImage] = useState(null)
  const [value, setValue] = useState("풀이과정등록")

  const uploadFile = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0];
    reader.onloadend = function () {
      setImage(reader.result)
    }
    reader.readAsDataURL(file)
    await handlebutton()
  }

  const handlebutton = () => {
    setValue("Solution")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('file', img)
    console.log(1)
    // return await axios.post('/', data).then(res=>console.log(res))
  }

  useEffect(()=>{
  })

  return (
    <div className="main-page">
      <div><img src={Puri_logo} className="puri_logo" width="100" height="100" alt="logo"/></div>
      {img===null ? (
        <img src={Example} className="upload_picture" width="200" height="320" alt="upload"/>
      ) : (
        <img src={img} className="upload_picture" width="200" height="320" alt="upload"/>
      )}
        <form>
          <input type="file" name="file" onChange={uploadFile}/>
          {value==="풀이과정등록" ? (
            <input type="submit" value={value} className="submit-button" onClick={(e)=>e.preventDefault()}/>
          ) : (
            <input type="submit" value={value} className="submit-button" onClick={handleSubmit}/>
          )}
        </form>
    </div>
  );
}



export default Main;

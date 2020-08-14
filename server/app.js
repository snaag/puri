const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001; 

app.listen( PORT , ()=>{
    console.log('listen at ', PORT);
})

app.get('/', (request, response)=>{
    response.send('hello world');
})

///사진업로드 => S3 => DB note => 사진 암호값 => Mathpix => 텍스트화 시키기

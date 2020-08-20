const AWS = require("aws-sdk");
const { request, response } = require("express");
const { Notes } = require("../models");
const users = require("./users");
const fetch = require("node-fetch");
const findError = require("./textControll");

//가져오는데 성공하면 img를 인코딩하기 (일단 데이터가 어떻게 들어오는지 확인이 지금 안되니까 일단 대략적인건)
//인코딩한 것을 Mathpix로 넘겨야함
//imgtoBase64 를 디비 picUrl에 저장해야함.

//create s3 object
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2"
});

//getObject
const param = {
  Bucket: "purireviewnote",
  Key: "reviewnoteImg/limit.jpg" //s3에 업데이트되는 파일명이 바로와야함
  //클라이언트단에서 보내준 파일 키값을 넣어야함.
  //이게 우리가 생각했엄 imgURL이 됨 - 표시는 https://purireviewnote.s3.ap-northeast-2.amazonaws.com/reviewnoteImg/0101.a415284f.png
};

//잠깐 그럼 key를 db에 넘겨야하잖아? 그러면
//그림을 애초에 처음에 S3에 올릴 때 dir과 이름을 지정하고 , 그걸 DB에 저장해야한다는 결론남.
//DB에서 그때 키값을 가져와서 getObject 넘긴 뒤 Mathpix 에 넘겨야함 ㅠㅠㅠ

/* 워크플로우

사진업로드 완료 ->  사진의 name을 설정 -> S3에 name으로 저장 -> getObject 로 바로 이미지를 받음 -> Mathpix로 넘기자
                                                       ㄴ DB에 이미지을 저장(picUrl => notes)
            
user_userId: DataTypes.STRING,
    picUrl: DataTypes.STRING,
    resultText: DataTypes.STRING,
    comment: DataTypes.STRING,
    review: DataTypes.BOOLEA
 */

async function URLToDB(request) {
  const user_userId = request.headers.userid;
  const { key } = request.body;
  //디비에 이미지저장함. (좀 따로 빼고싶음...) => 사실 디비에 저장하면 디비의 사이즈가너무 커져서 차라리 s3를 사용하는게 더 효율적인 결론은났지만 시간이 모자라!!!
  try {
    const noteInfo = await Notes.create({
      user_userId,
      picUrl:
        "https://purireviewnote.s3.ap-northeast-2.amazonaws.com" + "/" + key,
      review: false
    });
    //  response.status(200).send("db")
    return {
      id: noteInfo.dataValues.id,
      user_userId: noteInfo.dataValues.user_userId
    };
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  SendToMathpix: async (request, response) => {
    const key = request.body.key;
    try {
      const { id, user_userId } = await URLToDB(request);

      let data = {
        src:
          "https://purireviewnote.s3.ap-northeast-2.amazonaws.com" + "/" + key,
        formats: ["text", "data", "html"],
        data_options: {
          include_asciimath: true,
          include_latex: true
        }
      };
      let body = JSON.stringify(data);

      const result = await fetch("https://api.mathpix.com/v3/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          app_id: "aria2527_gmail_com_803285",
          app_key: "5230e2da5056c282a70c"
        },
        body: body
      });
      let resultJSON = await result.json();
      console.log("result", resultJSON);
      let MathpixEquations = [];
      for (let i = 0; i < resultJSON.data.length; i++) {
        console.log(resultJSON.data[i]["type"]);
        if (resultJSON.data[i]["type"] === "asciimath") {
          MathpixEquations.push(resultJSON.data[i]["value"]);
        }
      }
      let MathpixText = MathpixEquations.join(",");
      console.log(MathpixText);
      let inCorrectIndex = findError(MathpixText);
      console.log(inCorrectIndex);
      response.status(202).json({ id, resultText: MathpixText });
    } catch (e) {
      console.log(e);
    }
  }
};

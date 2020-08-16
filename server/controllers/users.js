const { Users } = require("../models");

module.exports = {
  join: async (request, response) => {
    const { userId, password, name } = request.body;
    try {
      const [user, created] = await Users.findOrCreate({
        where: {
          userId
        },
        defaults: {
          password,
          name
        }
      });

      // if (!created) {
      //   // 이전에 동일한 아이디로 생성이 된 적이 있는 경우
      //   response.status(401).send("이미 있는 아이디 입니다");
      // } else {
      console.log(user);
      response.status(201).send("성공적으로 가입되었습니다!");
      // }
    } catch (error) {
      console.log(error);
      response.status(500).send("Internal Server Error");
    }

    response.send("hi~");
  },
  login: () => {
    console.log(Users);
    console.log("hi login!");
  }
};

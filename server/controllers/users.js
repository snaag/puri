const crypto = require("crypto");
const { Users, UsersStatuses } = require("../models");

const secret = process.env.PURI_SECRET || "sample_secret_key";

module.exports = {
  join: async (request, response) => {
    const { userId, password, name } = request.body;
    try {
      const [user, isUserCreated] = await Users.findOrCreate({
        where: {
          userId
        },
        defaults: {
          password,
          name
        }
      });

      const key = crypto
        .createHmac("sha256", secret)
        .update(userId)
        .digest("hex");

      const [userKey, isUserKeyValid] = await UsersStatuses.findOrCreate({
        where: {
          userId
        },
        defaults: {
          key
        }
      });

      response.status(201).json("성공적으로 가입되었습니다!");
    } catch (error) {
      console.log(error);
      response.status(500).json("Internal Server Error");
    }
  },

  logout: async (request, response) => {
    const { userId } = request.body;
    try {
      const rows = await UsersStatuses.destroy({ where: { userId } });
      response.status(205).json("성공적으로 로그아웃 하였습니다");
    } catch (error) {
      response.status(500).json("Internal Server Error");
    }
  }
};

const { Notes } = require("../models");

module.exports = {
  get: async (request, response) => {
    try {
      const userId = request.headers.authorization;

      const rows = await Notes.findAll({
        where: {
          user_userId: userId
        }
      });

      response.status(200).json(rows);
    } catch (error) {
      console.log(error);
      request.headers.authorization
        ? response.status(404).json("헤더가 올바른지 확인해주세요")
        : response.status(500).json("Internal Server Error");
    }
  }
};

const { users } = require("../models");

module.exports = {
  join: () => {
    console.log(users);
    console.log("hi join!");
  },
  login: () => {
    console.log(users);
    console.log("hi login!");
  }
};

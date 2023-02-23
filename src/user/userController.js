var userService = require("./userServices");

var createUserControllerFunc = async (req, res) => {
  var result = null;
  try {
    result = await userService.createUserDBService(req.body);

    if (result.status) {
      res.send({ status: true, message: result.msg });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (err) {
    console.log(err);
  }
};

var loginUserControllerFunc = async (req, res) => {
  try {
    var result = await userService.loginuserDBService(req.body);
    console.log(`${result.status}`);
    if (result.status) {
      res.send({ status: true, message: result.msg });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};
const userCollectionFunc = async (req, res) => {
  try {
    var response = await userService.userCollection(req.body); //aqui manda el objeto del postman
    console.log(response.status);
    if (response.status) {
      res.send({ status: true, message: response.msg });
    } else {
      res.send({ status: false, message: response.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};

const searchUserFunc = async (req, res) => {
  try {
    var response = await userService.searchUser(req.body); //aqui manda el objeto del postman
    console.log(response.status);
    if (response.status) {
      res.send({ status: true, message: response.msg });
    } else {
      res.send({ status: false, message: response.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};
const deleteUserFunc = async (req, res) => {
  try {
    var response = await userService.deleteUser(req.body); //aqui manda el objeto del postman
    console.log(response.status);
    if (response.status) {
      res.send({ status: true, message: response.msg });
    } else {
      res.send({ status: false, message: response.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};
const updateUserFunc = async (req, res) => {
  try {
    var response = await userService.updateUser(req.body); //aqui manda el objeto del postman
    console.log(response.status);
    if (response.status) {
      res.send({ status: true, message: response.msg });
    } else {
      res.send({ status: false, message: response.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};

module.exports = {
  createUserControllerFunc,
  loginUserControllerFunc,
  searchUserFunc,
  userCollectionFunc,
  deleteUserFunc,
  updateUserFunc,
};

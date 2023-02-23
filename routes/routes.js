var express = require("express");

var userController = require("../src/user/userController");
const router = express.Router();

// ruta para login
router.route("/user/login").get(userController.loginUserControllerFunc);
// ruta para crear usuario
router.route("/user/create").post(userController.createUserControllerFunc);
// ruta buscar por nombre
router.route("/user/searchByName").get(userController.searchUserFunc);
// ruta praa listar todo
router.route("/user/userCollection").get(userController.userCollectionFunc);
// ruta de eliminar
router.route("/user/delete").delete(userController.deleteUserFunc);
// ruta de actualizar
router.route("/user/update").put(userController.updateUserFunc);

module.exports = router;

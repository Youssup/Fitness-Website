const express = require("express")
const app = express.Router()
const userController = require("../controllers/userController")

app
.get("/", userController.getUsers)

.get("/search", userController.searchUsers)

.put("/editUser", userController.editUser)

.post("/addActivity", userController.addActivity)

.put("/editActivity", userController.editActivity)

.delete("/deleteUser", userController.deleteUser)

.delete("/deleteActivity", userController.deleteActivity)

.post("/createUser", userController.createUser)

.post("/getUserByID", userController.getUserById)


module.exports = app
const users = require("../models/userModel");

exports.getUsers = async (req, res) => {
    try {
        const response = await users.getUsers()
        res.send(response)
    }
    catch (error) {
        res.status(401).send("could not get users")
    }
}
//I don't use this I know, but in the future it might be useful to have.
exports.searchUsers = async (req, res) => {
    try {
        const userID = req.body.id
        res.send(await users.editUser(userID))
    }
    catch (error) {
        res.status(401).send("could not edit user")
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = req.body.user
        res.send(await users.editUser(user))
    }
    catch (error) {
        res.status(401).send("could not edit user")
    }
}

exports.deleteUser  = async (req, res) => {
    try {
        const userID = req.body.id
        res.send(await users.deleteUser(userID))
    }
    catch (error) {
        res.status(401).send("could not delete user")
    }
}

exports.addActivity = async (req, res) => {
    try {
        const activity = {
            ...req.body.activity
        }
        const userID = req.body.userID
        //const activity = req.body.activity
        const result = await users.addActivity(userID, activity)
        res.send(result)
    }
    catch (error) {
        res.status(401).send("could not add activity")
    }

}

exports.editActivity = async (req, res) => {
    try {
        const user = req.body.user
        const activity = req.body.activity
        res.send(await users.editActivity(user, activity))
    }
    catch (error) {
        res.status(401).send("could not edit activity")
    }
}

exports.deleteActivity = async (req, res) => {
    try {
        const userID = req.body.userID
        const activityID = req.body.activityID
        res.send(await users.deleteActivity(userID, activityID))
    }
    catch (error) {
        res.status(401).send("could not delete activity")
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = req.body.user
        res.send(await users.createUser(user))
    }
    catch (error) {
        res.status(401).send("could not create user")
    }
}

exports.login = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        if (!username || !password) {
            return res.status(401).send("Username or password is missing")
        }
        await users.login(username, password).then(user => {
            if (user) {
                res.send("Login successful!")
            } else {
                res.status(401).send("incorrect username or password")
            }
        })
    }
    catch (error) {
        res.status(401).send(error.message)
    }
}

exports.getUserById = async (req, res) => {
    try {
        const userID = req.body.id
        res.send(await users.getUserById(userID))
    }
    catch (error) {
        res.status(401).send("could not get user")
    }
}
module.exports = app => {
    const tecsoft = require("../controller/user.controller")
    var router = require("express").Router()

    router.get("/users/:Email", tecsoft.findOneUser)
    router.get("/users", tecsoft.findAllUsers)
    router.post("/users", tecsoft.createNewUser)
    router.post("/users/:Email", tecsoft.updateUser)

    app.use("/api", router)

}
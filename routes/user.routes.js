module.exports = app => {
    const user = require("../controller/user.controller")
    var router = require("express").Router()

    router.get("/:Email", user.findOne)
    router.get("/", user.findAll)
    router.post("/", user.create)
    router.post("/:Email", user.update)

    app.use("/api/users", router)

}
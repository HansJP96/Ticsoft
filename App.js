const express = require("express");
const cors = require("cors");
const app = express();

const port = 3100

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.send({ message: "Welcome to ticsoft application." });
});

const db = require("./models")
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop(maybe not anymore because force is false) and re sync db.")
})

require("./routes/user.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const controller = require("../../controllers/useController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../views"));
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", controller.home);

app.get("/create", controller.createForm);

app.post("/add", controller.addUser);

app.get("/users", controller.usersList);

app.get("*", controller.notFound);

app.listen(5000);

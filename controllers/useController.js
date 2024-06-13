const { render } = require("ejs");
const db = require("../models/databse-connection");
exports.home = (req, res) => {
  res.render("home", { message: "Welcome to the user system" });
};

exports.createForm = (req, res) => {
  res.render("createUserForm");
};

exports.addUser = (req, res) => {
  console.log(req.body);
  db.execute("insert into users(userName) values(?)", [req.body.userName])
    .then(() => {
      // alert("Inserted");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
};

exports.usersList = (req, res) => {
  db.execute("select * from users").then((response) => {
    console.log(response[0]);
    res.render("usersList", { data: response[0] });
  });
};

exports.notFound = (req, res) => {
  res.render("notFound");
};

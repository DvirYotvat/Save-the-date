const express = require("express");
const res = require("express/lib/response");
const fs = require("fs");

const app = express();

const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/Add_arrival_confirmation", (req, res) => {
  fs.readFile("public/data/arrivals.json", function (err, usersfile) {
    if (err) return console.log("No Such File");
    var users = JSON.parse(usersfile);
    var user = req.body;
    var userexists = users.find((u) => u.first_name === user.first_name);
    if (!userexists) {
      users.push(user);
    } else {
      res.send("User exists!! Not Added");
    }

    fs.writeFile("public/data/arrivals.json", JSON.stringify(users), (err) => {
      if (err) return;
      res.send("האישור התקבל, תודה");
    });
  });
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});

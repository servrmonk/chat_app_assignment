const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  fs.readFile("chat.txt", (err, data) => {
    if (err) {
      console.log("Err in read file", err);
      data = "No chat exists";
    }

    res.send(
      `${data}<form action='/' method="POST">
      <input type='text' id='message' required name='message' placeHolder="message">
      <input type='hidden' name='username' id='username' value='${req.body.username || ""}' />
      <br />
      <button type='submit'>Send</button></form>`
    );
  });
});

app.post("/", (req, res) => {
  const message = `${req.body.username}: ${req.body.message}\n`;

  fs.appendFile("chat.txt", message, (err) => {
    if (err) {
      console.log("Error in appending", err);
      return res.status(500).send("Error in posting message");
    }
    res.redirect("/");
  });
});

app.get("/login", (req, res) => {
  res.send(
    `<form action='/' method="POST" onsubmit="localStorage.setItem('username', document.querySelector('input[name=username]').value)">
    <input type='text' required name='username'><button type='submit'>Add login</button></form>`
  );
});

app.listen(3000);

const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/login", (req, res, next) => {
  res.send(
    `<form action='/login' onsubmit="localStorage.setItem('username', document.querySelector('input[name=username]').value)" method="POST"><input type='text' required name='username'><button type='submit'>Add login</button></form>`
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  
  fs.appendFileSync("./chat.txt", JSON.stringify(req.body) + ",");
  res.redirect("/");
});

module.exports = router;

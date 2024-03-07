const express = require('express')
// const data = require('./data')

const router = express.Router();
router.get('/',(req,res,next)=>{
    res.send(`<form action='/' onsubmit="document.getElementById('username).value=localStorage.getItem('username')" method="POST"><input type='text' id='message'  required name='message' placeHolder="message"><button type='submit' />Add login</button></form>`)
})
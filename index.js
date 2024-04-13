require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<b>Hello World!</b>");
});
app.get('/login',(req,res)=>{
    res.send('<b>how are dhanu</b>')
})
app.get('/google',(req,res)=>{
  res.send('<b>google</b>')
})
app.get('/dhanu',(req,res)=>{
  res.send('<b>dhanu</b>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

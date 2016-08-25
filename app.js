"use strict";

require('dotenv').config();
const express = require('express');

let app = express();

const port = process.env.PORT;

app.get("/", function(req,res){
  res.json({message:"working on new features on my staging branch!!"});
});

app.listen(port,function(){
  console.log("I'm listening on port", port);
});

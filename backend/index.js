require('dotenv').config()
const express = require('express');
const asyncHandler = require('express-async-handler');
const cookieparser = require('cookie-parser');
const helmet = require('helmet');
const bodyparser = require('body-parser')
const cors= require('cors')
const app = express();
const PORT=4000;



app.use(cors());
app.use(bodyparser.json());
app.use(helmet());
app.use(cookieparser());



app.get("/",asyncHandler(async(req,res)=>{
  res.end("Hellouser this is, way to booking")
}));

app.listen(PORT,()=>{console.log("listening at port",PORT)})

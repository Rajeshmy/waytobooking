//built-in libraries
require('dotenv').config()
const express = require('express');
const cookieparser = require('cookie-parser');
const connectDb = require('./db/db')
const helmet = require('helmet');
const bodyparser = require('body-parser');
const cors= require('cors');
const app = express();


//custom imports;
const userrouter = require('./routes/user/userrouter')
const port = process.env.PORT||8000;


app.use(cors());
app.use(bodyparser.json());
app.use(helmet());
app.use(cookieparser());


app.use("/users",userrouter);
//app.use("/users",userrouter);


app.listen(port,()=>{
  console.log("listening at port",port);
  connectDb();
  
});

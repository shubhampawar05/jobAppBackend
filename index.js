const express = require('express')
const app = express()
const mongoose = require('mongoose');
const jobRoutes =require('./Routes/job')
const dotenv = require('dotenv')

app.use(express.json())
dotenv.config();
mongoose.set("strictQuery",false)
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('Connected!....'));

app.use(jobRoutes)



app.listen(10000,()=>{
    console.log("server is up and runing in port num 3000")
})





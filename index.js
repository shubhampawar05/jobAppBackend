const express = require('express')
const app = express()
const mongoose = require('mongoose');
const jobRoutes =require('./Routes/job')

app.use(express.json())

mongoose.connect('mongodb+srv://Shubham05:Mongodb@1250@job.tg4lipa.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!....'));

app.use(jobRoutes)



app.listen(10000,()=>{
    console.log("server is up and runing in port num 3000")
})





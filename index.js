const express = require('express')
const app = express()
const mongoose = require('mongoose');
const jobRoutes =require('./Routes/job')

app.use(express.json())

mongoose.connect('mongodb://0.0.0.0/jobDB')
  .then(() => console.log('Connected!....'));

app.use(jobRoutes)



app.listen(8080,()=>{
    console.log("server is up and runing in port num 3000")
})





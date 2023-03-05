const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/UserRoutes')
const ClientRouter = require('./routers/ClientRoutes')
const ThreadRouter = require('./routers/ThreadRoutes')
const ApplicationRouter = require('./routers/ApplicatinoRoutes');
const mongoose = require('mongoose');

const app = express();
app.use(cors()) //USED TO FULFIL CORS POLICY
app.get('/',(req,res)=>{
    res.send("The backend is up and running!"); //DEFAULT ROUTE
})
app.use(express.json())

//CONNECTING TO THE ROUTERS

app.use('/api/user',UserRouter) //POINTS TO ROUTERS A USER CAN ACCESS
app.use('/user',ClientRouter)
app.use('/api/thread',ThreadRouter)
app.use('/api/application',ApplicationRouter)

mongoose.connect("mongodb+srv://asadparkar:HkwXafUh1xVOfSP8@cluster0.hpqs9vo.mongodb.net/DevConnect").then(()=>app.listen(5000)).then(()=>{console.log("Database Connection Successful || Server Started on Port 5000")}).catch((err)=>{console.log(err)});


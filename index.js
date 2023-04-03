const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose');

//user routes
const userRoutes = require('./routes/userRoutes')

//user
app.use("/user",userRoutes)

//database 
mongoose.connect('mongodb+srv://amit:Amit1324@cluster0.sxuwjh9.mongodb.net/task3?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log("Database error: " + err);
    }else{
        console.log("database connection");
    }
})


//server
app.listen(3000,(err)=>{
    if(err){
        console.log("Server Not Started");
    }else{
        console.log("server started on port 3000");    
    }
})
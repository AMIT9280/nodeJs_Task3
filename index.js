const express = require('express');
const app = express();



app.listen(3000,(err)=>{
    if(err){
        console.log("Server Not Started");
    }else{
        console.log("server started on port 3000");    
    }
})
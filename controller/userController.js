const userModel = require('../model/userModel')

//Create a new user
exports.CreateUser = (req,res)=>{
    const users =  userModel(req.body)
    users.save((err,data)=>{
        if(err){
            res.status(401).json({
                msg:"Error Creating user"
            })
        }else{
            res.status(200).json({
                msg:"User created successfully",
                data: data
            })
        }
    })
}

// get All Users

exports.GetAllUsers = (req,res)=>{
    userModel.find((err,data)=>{
        if (err) {
                res.status(401).json({
                    msg:"Error getting users"
                })
        }else{
                res.status(200).json({
                    msg:"User Retrieved successfully",
                    data: data
                })
        }
    })
}
 
//get user by id 
exports.GetUserById = (req,res)=>{
    userModel.findById(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                msg:"Error getting user"
            })
    }else{
            res.status(200).json({
                msg:"User Retrieved successfully",
                data: data
            })
    }
    })
}
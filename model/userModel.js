const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userModel = schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:String
    },
})

module.exports = mongoose.model('user',userModel)
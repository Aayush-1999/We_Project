const mongoose   = require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        default:null
    },
    lastName:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true,
        required:true
        },
    password:String,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    doctor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Doctor"
        }
    ]
})

module.exports=mongoose.model("User",UserSchema);
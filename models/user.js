const mongoose   = require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true,
        required:true
        },
    password:String,
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book"
        }
    ]
})

module.exports=mongoose.model("User",UserSchema);
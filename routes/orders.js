const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Book    = require("../models/book");

router.post("/",(req,res)=>{
        User.findById(req.body.id)
        .populate('books')
        .exec((err,user)=>{
            if(err){
                console.log(err)
            }
            else{
                res.status(200).json({user})
            }
        })
})

module.exports = router;
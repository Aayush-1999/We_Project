const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Book      = require("../models/book");

router.post("/",async(req,res)=>{
    try{
        let user = await User.findById(req.body.id)
        const newBook = await Doctor.create(req.body.book)
        user.books.push(newBook);
        await user.save();
        res.status(200).json({})
    }
    catch(err){
        console.log(err)
        res.status(400).json({})
    }
})

module.exports = router;
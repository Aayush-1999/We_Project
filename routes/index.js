const express      = require("express"),
      router       = express.Router(),
      bcrypt       = require("bcryptjs"),
      jwt          = require("jsonwebtoken"),
      User         = require("../models/user");

//REGISTER ROUTE
router.post("/register",async(req,res)=>{
    console.log(req.body)
    try{   
        let user = await User.findOne({email:req.body.email})
        if(user) return res.status(400).json({msg:"User already exists"})
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            email:req.body.email,
            password:hash
        });
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET_KEY,
            { expiresIn:3600 }
        )
        res.status(200).json({user,token});
    }
    catch(err){
        res.status(400).json({msg:"registeration unsuccessful"});
    }
})

//LOGIN ROUTE
router.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        let user = await User.findOne({email:email})
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(req.body.password,user.password)
            .then(isMatch=>{
                if(!isMatch) return res.status(400).json({passwordincorrect: "Password incorrect"})
                const token=jwt.sign(
                    {id:user._id},
                    process.env.JWT_SECRET_KEY,
                    { expiresIn:3600 }
                ) 
                res.status(200).json({user,token});
            })
    }
    catch(err){
        res.status(400).json({msg:"Something went wrong"})
    }
})

module.exports=router;
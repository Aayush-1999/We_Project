const express               = require("express"),
      app                   = express(),
      cors                  = require("cors"),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      path                  = require("path");

require("dotenv").config();

//ROUTES
const indexRoute = require("./routes/index"),
      bookingRoute = require("./routes/booking"),
      userRoute  = require("./routes/user");

mongoose.connect(process.env.DATABASEURL,{ useUnifiedTopology: true ,useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",userRoute);
app.use("/book",bookingRoute);
app.use("/",indexRoute);    

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}

app.listen(process.env.PORT || 5000)
{
    console.log("Server has started");
}
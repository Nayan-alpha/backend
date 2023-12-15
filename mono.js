const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const express=require("express")
const cors=require("cors")
const cookieParser=require('cookie-parser')
const app=express();
app.use(express.json())
app.use("/",require("./routs/authRouts"))

app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.listen(8000,()=>{console.log("Serve is running")})

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("server connected")})
.catch((error)=>{console.log(error)})

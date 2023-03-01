const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const route = require('./routes/route')
const app=express()
app.use(cors())
mongoose.connect("mongodb+srv://Vishanksingh:7997@cluster0.ga4iiwd.mongodb.net/Ankush1234-DB?retryWrites=true&w=majority",{dbName:"bonus"},{useNewUrlParser:true}).then(()=>{console.log('connected to database')}).catch((err)=>{console.log(err.message)})

app.use(express.json())
app.use('/',route)

app.listen(3000,()=>{console.log("app is running on port 3000")})


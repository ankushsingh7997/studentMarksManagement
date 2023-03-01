const express=require('express');
const route=express.Router();
const data=require('../controllers/admin');
const { createData } = require('../controllers/data');


route.get('/test-me',(req,res)=>{res.send({status:true,message:"working fine"})})
route.post('/register',data.register)
route.post('/login',data.login)
route.post('/create',createData)

module.exports=route
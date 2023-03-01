const express=require('express');
const route=express.Router();
const data=require('../controllers/admin');
const { createData, editData } = require('../controllers/data');


route.get('/test-me',(req,res)=>{res.send({status:true,message:"working fine"})})
route.post('/register',data.register)
route.post('/login',data.login)
route.post('/create',createData)
route.put('/update/:userId',editData)

module.exports=route
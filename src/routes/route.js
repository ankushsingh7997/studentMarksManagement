const express=require('express');
const route=express.Router();
const data=require('../controllers/admin');
const { createData, editData, view } = require('../controllers/data');


route.get('/test-me',(req,res)=>{res.send({status:true,message:"working fine"})})
route.post('/register',data.register)
route.post('/login',data.login)
route.post('/create',createData)
route.put('/update/:userId',editData)
route.get('/view',view)

module.exports=route
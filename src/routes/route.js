const express=require('express');
const route=express.Router();
const data=require('../controllers/admin');
const { createData, editData, view, deleteStudent, fetchData } = require('../controllers/data');


route.get('/test-me',(req,res)=>{res.send({status:true,message:"working fine"})})
route.post('/register',data.register)
route.post('/login',data.login)
route.post('/create',createData)
route.put('/update/:userId',editData)
route.get('/view',view)
route.delete('/delete/:userId/:roll',deleteStudent)
route.get('/getdata/:userId',fetchData)

module.exports=route
const dataModel=require('../model/dataModel.js')
const adminModel=require('../model/adminModel')
const {isValidObjectId}=require('mongoose')
const { isValidName } = require('../validations/validations.js')

const createData=async (req,res)=>{
    let data=req.body
    if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"please provide fields"})
    // userId
    // if(!data.userId) return res.status(400).send({status:false,message:"please provide userId"})
    // data.userId=data.userId.trim()
    // if(data.userId=="") return res.status(400).send({status:false,message:"please provide userId"})
    // if(!isValidObjectId(data.userId)) return res.status(400).send({status:false,message:"please provide valid userId"})
    // studentName
    if(!data.studentName) return res.status(400).send ({status:false,message:"studentName is required"})
    else
    {
        data.studentName=data.studentName.trim()
        if(data.studentName=='')return res.status(400).send({status:false,message:"studentName field cannot be empty"})
        if(!isValidName(data.studentName)) return res.status(400).send({status:false,message:"pass valid studentName"})
        
    }
    


// roll------------------------------


//------------------------------------

//subjects
if(data.java)
    {
        if(typeof Number(data.java)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.java<0)  return res.status(400).send({status:false,message:"provide valid marks for java"})

    }
    if(data.javaScript)
    {
        if(typeof Number(data.javaScript)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.javaScript<0)  return res.status(400).send({status:false,message:"provide valid marks for javaScript"})

    }
    if(data.mongoDb)
    {
        if(typeof Number(data.mongoDb)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.mongoDb<0)  return res.status(400).send({status:false,message:"provide valid marks for mongoDb"})

    }
    if(data.python)
    {
        if(typeof Number(data.python)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.python<0)  return res.status(400).send({status:false,message:"provide valid marks for python"})

    }
    if(data.python)
    {
        if(typeof Number(data.python)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.python<0)  return res.status(400).send({status:false,message:"provide valid marks for python"})

    }
    if(isDeleted)
    {
        delete data['isDeleted'] 
    }
   





    return res.status(200).send("you are good to go")



}
module.exports={createData}
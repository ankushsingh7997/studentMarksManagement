const dataModel=require('../model/dataModel.js')
const adminModel=require('../model/adminModel')
const {isValidObjectId}=require('mongoose')
const { isValidName } = require('../validations/validations.js')

const createData=async (req,res)=>{
    let data=req.body
    if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"please provide fields"})
    let object={}
    let subjects={}
    // userId
    if(!data.userId) return res.status(400).send({status:false,message:"please provide userId"})
    data.userId=data.userId.trim()
    if(data.userId=="") return res.status(400).send({status:false,message:"please provide userId"})
    if(!isValidObjectId(data.userId)) return res.status(400).send({status:false,message:"please provide valid userId"})
    object.userId=data.userId
    // studentName
    if(!data.studentName) return res.status(400).send ({status:false,message:"studentName is required"})
    else
    {
        data.studentName=data.studentName.trim()
        if(data.studentName=='')return res.status(400).send({status:false,message:"studentName field cannot be empty"})
        if(!isValidName(data.studentName)) return res.status(400).send({status:false,message:"pass valid studentName"})
        
    }
    object.studentName=data.studentName
    


// roll------------------------------

if(!data.roll) return res.status(400).send ({status:false,message:"rollNumber is required"})
else{
    if(!Number(data.roll)) return res.status(400).send ({status:false,message:"invalid rollNumber passed"})
    
}
object.roll=data.roll

//------------------------------------

 //check duplicacy of roll
 let createData
 let checkRoll=await dataModel.findOne({roll:data.roll})
 if(!checkRoll) 
 {

//subjects
if(data.java)
    {
        if(typeof Number(data.java)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.java<0)  return res.status(400).send({status:false,message:"provide valid marks for java"})
        
       subjects.java=data.java
    }
    if(data.javaScript)
    {
        if(typeof Number(data.javaScript)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.javaScript<0)  return res.status(400).send({status:false,message:"provide valid marks for javaScript"})
        subjects.javaScript=data.javaScript

    }
    if(data.mongoDb)
    {
        if(typeof Number(data.mongoDb)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.mongoDb<0)  return res.status(400).send({status:false,message:"provide valid marks for mongoDb"})
        subjects.mongoDb=data.mongoDb

    }
    if(data.python)
    {
        if(typeof Number(data.python)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.python<0)  return res.status(400).send({status:false,message:"provide valid marks for python"})
        subjects.python=data.python

    }
    if(data.sql)
    {
        if(typeof Number(data.sql)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.sql<0)  return res.status(400).send({status:false,message:"provide valid marks for sql"})
        subjects.sql=data.sql

    }
    object.subjects=subjects
     createData=await dataModel.create(object)
}
else{
    
let subject=checkRoll.subjects
subject=subject.toObject()
console.log(checkRoll.subjects)

console.log(subject)

if(data.java)
    {
        if(typeof Number(data.java)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.java<0)  return res.status(400).send({status:false,message:"provide valid marks for java"})
        if(!subject["java"])
        {
            subject["java"]=data.java
        }
        else{
            subject["java"]+=Number(data.java)
        }
        
       
    }

    if(data.javaScript)
    {
        if(typeof Number(data.javaScript)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.javaScript<0)  return res.status(400).send({status:false,message:"provide valid marks for javaScript"})
        
        if(!subject["javaScript"])
        {
            subject["javaScript"]=data.javaScript
        }
        else{
            subject["javaScript"]+=Number(data.javaScript)
        }

    }
    if(data.mongoDb)
    {
        if(typeof Number(data.mongoDb)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.mongoDb<0)  return res.status(400).send({status:false,message:"provide valid marks for mongoDb"})
        if(!subject["mongoDb"])
        {
            subject["mongoDb"]=data.mongoDb
        }
        else{
            subject["mongoDb"]+=Number(data.mongoDb)
        }

    }
    if(data.python)
    {
        if(typeof Number(data.python)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.python<0)  return res.status(400).send({status:false,message:"provide valid marks for python"})
        if(!subject["python"])
        {
            subject["python"]=data.python
        }
        else{
            subject["python"]+=Number(data.python)
        }

    }
    if(data.sql)
    {
        if(typeof Number(data.sql)!='number')
        return res.status(400).send({status:false,message:"provide valid marks"})
        if(data.sql<0)  return res.status(400).send({status:false,message:"provide valid marks for sql"})
        if(!subject["sql"])
        {
            subject["sql"]=(data.sql)
        }
        else{
            subject["sql"]+=Number(data.sql)
        }

    }
    
    object.subjects=subject


     createData=await dataModel.findOneAndUpdate({roll:data.roll},object,{new:true})



}
   
   
   






    return res.status(200).send({status:true,message:"data uploaded seccessfully",data:createData})



}
const editData=async (req,res)=>{
    let data=req.body;
    let userId=req.params.userId
    let obj={}

    if(!data.roll) return res.status(400).send({status:false,message:"roll is a mendatory field"})
    if(!Number(data.roll)) return res.status(400).send ({status:false,message:"invalid rollNumber passed"})


    // student name
    if(data.studentName)
    {
        data.studentName=data.studentName.trim()
        if(data.studentName=='')return res.status(400).send({status:false,message:"studentName field cannot be empty"})
        if(!isValidName(data.studentName)) return res.status(400).send({status:false,message:"pass valid studentName"})
        obj.studentName=data.studentName
    }
   
    if(data.subjects)
    {
       
        if(data.subjects.java)
        {
            if(data.subjects.java.trim()!=""){
            if(typeof Number(data.subjects.java)!='number')
            return res.status(400).send({status:false,message:"provide valid marks"})
            if(data.subjects.java<0)  return res.status(400).send({status:false,message:"provide valid marks for java"})
            
           obj['subjects.java']=data.subjects.java
            }
        }
        if(data.subjects.javaScript)
        {
            if(data.subjects.javaScript.trim()!=""){
            if(typeof Number(data.subjects.javaScript)!='number')
            return res.status(400).send({status:false,message:"provide valid marks"})
            if(data.subjects.javaScript<0)  return res.status(400).send({status:false,message:"provide valid marks for javaScript"})
            obj["subjects.javaScript"]=data.subjects.javaScript
            }
        }
        if(data.subjects.mongoDb)
        {
            if(data.subjects.mongoDb.trim()!=""){
            
            if(typeof Number(data.subjects.mongoDb)!='number')
            return res.status(400).send({status:false,message:"provide valid marks"})
            if(data.subjects.mongoDb<0)  return res.status(400).send({status:false,message:"provide valid marks for mongoDb"})
            obj["subjects.mongoDb"]=data.subjects.mongoDb
            }
        }
        if(data.subjects.python)
        {
            if(data.subjects.python.trim()!=""){
            if(typeof Number(data.subjects.python)!='number')
            return res.status(400).send({status:false,message:"provide valid marks"})
            if(data.subjects.python<0)  return res.status(400).send({status:false,message:"provide valid marks for python"})
            obj["subjects.python"]=data.subjects.python
            }
        }
        if(data.subjects.sql)
        {
            if(data.subjects.sql.trim()!=""){
            if(typeof Number(data.subjects.sql)!='number')
            return res.status(400).send({status:false,message:"provide valid marks"})
            if(data.subjects.sql<0)  return res.status(400).send({status:false,message:"provide valid marks for sql"})
            obj["subjects.sql"]=data.subjects.sql
            }
    
        }



    }
    let update= await dataModel.findOneAndUpdate({userId:userId,roll:data.roll},obj,{new:true})
    if(!update) return res.status(404).send({status:false,message:"incorrect roll or user"})


    return res.status(200).send({status:true,message:'updated successfully',data:update})




}
const view=async (req,res)=>{
    const{name,subject}=req.query
    
    if(Object.keys(req.query).length==0) return res.status(400).send({status:false,message:"please pass something"})
    let findData;
    if(name){
         findData=await dataModel.find({studentName:name,isDeleted:false}).select({roll:1,studentName:1,subjects:1,_id:0})
        
        

        
    }
    else if(subject){
         findData=await dataModel.find({isDeleted:false}).select({roll:1,subjects:1,studentName:1,_id:0})
         let result=[]
         for(i in findData)
         {
            if(findData[i].subjects[subject]||findData[i].subjects[subject]==0)
            {
                result.push(findData[i])
            } 
         }
         findData=result

       
    }
    if(findData.length==0) return res.status(404).send({status:false,message:"No data found "})
      
    return res.status(200).send({status:true,data:findData})

}

const deleteStudent=async(req,res)=>{
let {userId,roll}=req.params;
if(!roll) return res.status(400).send({status:false,message:"please provid roll"})
if(!Number(roll)) return res.status(400).send({status:false,message:"please provid valid roll"})
let deletestudent=await dataModel.findOneAndUpdate({userId:userId,roll,isDeleted:false},{isDeleted:true},{new:true})

if(!deletestudent) return res.status(404).send({status:false,message:"no student found"})
return res.status(200).send({status:false,message:"student deleted successfully"})


}
module.exports={createData,editData,view,deleteStudent}
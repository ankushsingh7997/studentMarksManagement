const mongoose=require('mongoose')
let uploadData=new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'admin'
},
roll:{type:Number,unique:true,required:true},
studentName:{type:String,required:true},
subjects:{
    java:{type:Number},
    javaScript:{type:Number},
    mongoDb:{type:Number},
    python:{type:Number},
    sql:{type:Number},
},
isDeleted:{type:Boolean,default:false}

},{timestamps:true})
module.exports=mongoose.model('data',uploadData)
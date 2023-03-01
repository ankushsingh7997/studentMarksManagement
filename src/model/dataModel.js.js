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
    java:{type:Number,default:null},
    javaScript:{type:Number,default:null},
    mongoDb:{type:Number,default:null},
    python:{type:Number,default:null},
    sql:{type:Number,default:null},
},
isDeleted:{type:Boolean,default:false}

},{timestamps:true})
module.exports=mongoose.model('data',uploadData)
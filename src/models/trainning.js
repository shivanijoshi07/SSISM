const express=require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const TrainningSchema=new mongoose.Schema({

    Topic:{
        type:String,
        required:true,
        trim:true
    },
    Durations:{
       type:String,
       required:true 
    },
    Start_Time:{
        type:Date,
        required:true
    },
    Web_link:{
        type:String,
        required:true,
        trim:true
    },
    Level_name:{
        type:String,
        required:true
    }
})
const trainning=new mongoose.model("trainning",TrainningSchema);
module.exports=trainning;
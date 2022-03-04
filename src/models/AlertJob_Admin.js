const express=require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const JobAlertSchema=new mongoose.Schema({
    Company_name:{
        type:String,
        trim:true,
    },
    Student_name:{
        type:String,
        trim:true
    },
    Packege:{
        type:Number,
        trim:true,
    },
    Job_roll:{
        type:String,
        trim:true
    }
})

const AlertAdmin=new mongoose.model("AlertAdmin",JobAlertSchema);
module.exports=AlertAdmin;
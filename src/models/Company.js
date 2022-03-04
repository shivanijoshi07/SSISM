const express=require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const ComapanyVisitSchema=new mongoose.Schema({
    company_name:{
        type:String,
        // required:true
    },
    comapany_head:{
        type:String,
        // required:true,
        trim:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true,
        
    },
    User_Id:{
        type:String,
        required:true,
    },
    Password:{
        type:Number,
        required:true,
    }
})
const CompanyVisit=new mongoose.model("CompanyVisit",ComapanyVisitSchema);
module.exports=CompanyVisit;
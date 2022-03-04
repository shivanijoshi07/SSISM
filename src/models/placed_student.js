const express=require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const PlacedstdSchema=new mongoose.Schema({
    // Student:{
    //     type:Number,
    //     foreinKey:
    // },
    Company_name:{
        type:String,
        trim:true,
    },
    Job_roll:{
        type:String,
        // required:true,
        trim:true
    },
    package:{
        type:Number,
    },
    location:{
        type:String,
        // required:true,
    },
    Batch:{
        type:Number,
        trim:true,
    }

})

const PlacedStudent=new mongoose.model("PlacedStudent",PlacedstdSchema);
module.exports=PlacedStudent;
const express=require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const TrainnerSchema=new mongoose.Schema({
    // Trainner_Id:Number,
    Address:{
        type:String,
        required:true,
        trim:true,
    },
    Contact:{
        type:Number,
        unique:true,
        min:10,
        // max:11,
        required:true,
    },
    Head_Name:{
        type:String,
        required:true,
        trim:true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.default.isEmail(value)) {
                throw new Error("invalid Email");
            }
        }
    },

 })
 const trainner= new mongoose.model('trainner',TrainnerSchema);
 module.exports=trainner;
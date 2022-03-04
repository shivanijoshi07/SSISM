const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");

const ProvideJobSchema = new mongoose.Schema({
    company_id: {
        type: Number,
        required: true,
    },
    Job_type: {
        type: String,
        required: true,
        trim: true
    },
    Package: {
        type: Number,
        required: true,
    },
    Batch: {
        type: Array,
        required: true
    },

})

const ProvideJobC=new mongoose.model("ProvideJobC",ProvideJobSchema);
module.exports=ProvideJobC;
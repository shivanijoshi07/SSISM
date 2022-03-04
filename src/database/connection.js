const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/SSISM",{
      // useCreateIndex:true,
    // useNewUrlparser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection Successfull....");
}).catch((err)=>{
    console.log("no connection. ?" + err);
})
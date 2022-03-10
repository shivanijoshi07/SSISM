const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://poonamkh01:poonamkh@cluster0.u0dzt.mongodb.net/ITEG_management?retryWrites=true&w=majority"
,{
      // useCreateIndex:true,
    // useNewUrlparser:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false

}).then(()=>{
    console.log("connection Successfull....");
}).catch((err)=>{
    console.log("no connection. ?" + err);
})
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://poonamkh01:poonamkh@cluster0.u0dzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
,{
      // useCreateIndex:true,
    // useNewUrlparser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection Successfull....");
}).catch((err)=>{
    console.log("no connection. ?" + err);
})
const { application } = require("express");
const express = require("express");


// mongoose connection 
require("./src/database/connection");


const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());

const router = require('./src/routes/routes');

app.use('/', router);


//  post API In trainner 
// app.post("/posttrainner", async (req, res) => {

//     try {

//         console.log(req.body);
//         const trainnerRecord = new TrainnerSchema(req.body);
//         console.log(trainnerRecord)
//         const result = await trainnerRecord.save();
//         console.log(result)
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

// get API in trainner
// app.get("/gettrainner", async (req, res) => {
//     console.log("get API Trainner")
//     const getTrainner = await TrainnerSchema.find();
//     res.send(getTrainner);
// })


app.listen(port, () => {
    console.log(`connection live at port no. ${port}`);
})
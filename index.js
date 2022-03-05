
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



// post API  in trainning
// app.post("/postTrainning", async (req, res) => {
//     // console.log('req come at postTarning ')
//     try {
//         console.log(req.body);
//         const trainningRecord = new TrainningSchema(req.body);
//         console.log(trainningRecord)
//         const result = await trainningRecord.save();
//         console.log(result)
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// get API Trainning 
// app.get("/getTrainning", async (req, res) => {
//     console.log("get API Trainning");
//     const getTrainning = await TrainningSchema.find();
//     res.send(getTrainning);
// });


// post API in Company
// app.post("/postCompany", async (req, res) => {
//     console.log("req at company");
//     try {
//         console.log(res.body);
//         const companyRecord = new CompanyVisit(req.body);
//         console.log(companyRecord);
//         const result = await companyRecord.save();
//         console.log(result);
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })


// get API company 
// app.get("/getCompany", async (req, res) => {
//     //    console.log("get API comapanyVisited");
//     const getCompany = await CompanyVisit.find();
//     res.send(getCompany);
// })


// placed Student post API
// app.post("/postPlacedSTD", async (req, res) => {
//     //    console.log("placed API Student");
//     try {
//         console.log(res.body);
//         const recordPlacedSTD = new PlacedstdSchema(req.body);
//         console.log(recordPlacedSTD);
//         const result = await recordPlacedSTD.save();
//         console.log(result);
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//         // console.log(e);
//     }
// })

// get ApI placed Student 
// app.get("/getPlacedSTD", async (req, res) => {
//     console.log("get ApI placed student");
//     const getPlacedSTD = await PlacedstdSchema.find();
//     console.log(getPlacedSTD);
//     res.status(200).send(getPlacedSTD);
// })


// post API job Alert for Admin
// app.post("/postAlertJob", async (req, res) => {
//     //    console.log("placed API Student");
//     try {
//         console.log(res.body);
//         const recordAlertJob = new AlertJobSchema(req.body);
//         console.log(recordAlertJob);
//         const result = await recordAlertJob.save();
//         console.log(result);
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//         console.log(e);
//     }
// })

// get ApI Alert Job Admin 
// app.get("/getAlertJob", async (req, res) => {
//     console.log("get ApI placed student");
//     const getAlertJob = await AlertJobSchema.find();
//     console.log(getAlertJob);
//     res.status(200).send(getAlertJob);
// })

// post API provide Job
// app.post("/postProvidejob", async (req, res) => {
//     //    console.log("placed API Student");
//     try {
//         console.log(res.body);
//         const recordprovideJob = new provideJob(req.body);
//         console.log(recordprovideJob);
//         const result = await recordprovideJob.save();
//         console.log(result);
//         res.status(201).send(result);
//     } catch (e) {
//         res.status(400).send(e);
//         console.log(e);
//     }
// })

// get ApI Provide Job
// app.get("/getProvideJob", async (req, res) => {
//     console.log("get ApI placed student");
//     const getprovideJob = await provideJob.find();
//     console.log(getprovideJob);
//     res.status(200).send(getprovideJob);
// })



app.listen(port, () => {
    console.log(`connection live at port no. ${port}`);
})
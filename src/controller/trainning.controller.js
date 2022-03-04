
const TrainningSchema = require("../models/trainning");

exports.postTrainning = async (req, res) => {
    console.log('req come at postTarning ')
    try {
        console.log(req.body);
        const trainningRecord = new TrainningSchema(req.body);
        console.log(trainningRecord)
        const result = await trainningRecord.save();
        console.log(result)
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getTrainning = async(req,res)=>{
       console.log("get API Trainning");
       const getTrainning=await TrainningSchema.find();
       res.send(getTrainning);
    }
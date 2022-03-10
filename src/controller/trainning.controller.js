
const TrainningSchema = require("../models/trainning");

// post Trainning  records
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

// get all Trainning records
exports.getTrainning = async (req, res) => {
    console.log("get API Trainning");
    const getTrainning = await TrainningSchema.find();
    res.send(getTrainning);
}

// get Endivitual Trainning records
exports.getEndivitualTrainning = async (req, res) => {
    try {
        const _id = req.params.id;
        const getEndivitualT = await TrainningSchema.findById(_id);
        console.log(getEndivitualT);
        if (!getEndivitualT) {
            return res.status(404).send();
        }
        else {
            res.send(getEndivitualT);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}

// updates Trainning records
exports.patchEndivitualTrainning = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatesTrainning = await
            TrainningSchema.findByIdAndUpdate(_id, req.body);
        res.send(updatesTrainning)
    } catch (e) {
        res.status(400).send(e);
    }
}


// delete Trainning records
exports.deleteTrainning=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteT=await TrainningSchema.findByIdDelete(id);
      if(!deleteT){
          return res.status(400).send();
      }
      res.send(deleteT);
    }
    catch(e){
      res.status(500).send(e);
    }
}
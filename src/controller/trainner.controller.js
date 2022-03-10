const TrainnerSchema = require('../models/trainner');

//post Trainner records 
exports.postTrainner = async (req, res) => {
console.log('req come at post trainner controller');
    try {

        // console.log(req.body);
        const trainnerRecord = new TrainnerSchema(req.body);
        console.log(trainnerRecord)
        const result = await trainnerRecord.save();
        console.log(result)
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};


// get all trainner records
exports.getTrainner = async (req, res) => {
    console.log("get API Trainner")
    const getTrainner = await TrainnerSchema.find();
    res.send(getTrainner);
}


// Get endivitual Trainner records  
exports.getEndivitualTrainner= async (req, res) => {
    try {
        const _id = req.params.id;
        const getEndivitualT = await TrainnerSchema.findById(_id);
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
};


// updates Trainner records
exports.patchEndivitualTrainner = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatesTrainner = await
            TrainnerSchema.findByIdAndUpdate(_id, req.body);
        res.send(updatesTrainner)
    } catch (e) {
        res.status(400).send(e);
    }
};


// delete Trainner Records
exports.deleteTrainner=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteT=await TrainnerSchema.findByIdDelete(id);
      if(!deleteT){
          return res.status(400).send();
      }
      res.send(deleteT);
    }
    catch(e){
      res.status(500).send(e);
    }
};
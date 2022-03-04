const TrainnerSchema = require('../models/trainner');

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

exports.getTranner = async (req, res) => {
    console.log("get API Trainner")
    const getTrainner = await TrainnerSchema.find();
    res.send(getTrainner);
}
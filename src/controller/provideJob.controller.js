const providejob=require('../models/ProvideJob');

exports.providejobPost= async (req, res) => {
    //    console.log("placed API Student");
    try {
        console.log(res.body);
        const recordprovideJob = new providejob(req.body);
        console.log(recordprovideJob);
        const result = await recordprovideJob.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
};

exports.getProvidejob=async (req, res) => {
    console.log("get ApI placed student");
    const getprovideJob = await providejob.find();
    console.log(getprovideJob);
    res.status(200).send(getprovideJob);
};
const AlertJobSchema=require('../models/AlertJob_Admin');

exports.postAlertJob=async (req, res) => {
    //    console.log("placed API Student");
    try {
        console.log(res.body);
        const recordAlertJob = new AlertJobSchema(req.body);
        console.log(recordAlertJob);
        const result = await recordAlertJob.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
};

exports.getAlertJob=async (req, res) => {
    console.log("get ApI placed student");
    const getAlertJob = await AlertJobSchema.find();
    console.log(getAlertJob);
    res.status(200).send(getAlertJob);
};
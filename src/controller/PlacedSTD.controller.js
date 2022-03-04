const PlacedstdSchema=require('../models/placed_student');

exports.postPlacedSTD=async (req, res) => {
    //    console.log("placed API Student");
    try {
        console.log(res.body);
        const recordPlacedSTD = new PlacedstdSchema(req.body);
        console.log(recordPlacedSTD);
        const result = await recordPlacedSTD.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        // console.log(e);
    }
};

exports.getPlacedSTD=async (req, res) => {
    console.log("get ApI placed student");
    const getPlacedSTD = await PlacedstdSchema.find();
    console.log(getPlacedSTD);
    res.status(200).send(getPlacedSTD);
}
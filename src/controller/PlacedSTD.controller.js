const PlacedstdSchema=require('../models/placed_student');

// post records placed students
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


// get all placed Students records
exports.getPlacedSTD=async (req, res) => {
    console.log("get ApI placed student");
    const getPlacedSTD = await PlacedstdSchema.find();
    console.log(getPlacedSTD);
    res.status(200).send(getPlacedSTD);
};


// get endivitual Placed students records
exports.getEndivitualPlacedStd= async (req, res) => {
    try {
        const _id = req.params.id;
        const getEndivitualPS = await PlacedstdSchema.findById(_id);
        console.log(getEndivitualPS);
        if (!getEndivitualPS) {
            return res.status(404).send();
        }
        else {
            res.send(getEndivitualPS);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};


// updates placed Students records
exports.patchEndivitualPlacedStd = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatesPlacedStd = await
            PlacedstdSchema.findByIdAndUpdate(_id, req.body);
        res.send(updatesPlacedStd)
    } catch (e) {
        res.status(400).send(e);
    }
};


// delete placed students records
exports.deletePlacedStd=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteStd=await PlacedstdSchema.findByIdDelete(id);
      if(!deleteStd){
          return res.status(400).send();
      }
      res.send(deleteStd);
    }
    catch(e){
      res.status(500).send(e);
    }
};
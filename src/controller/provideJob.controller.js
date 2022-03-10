const providejob=require('../models/ProvideJob');


//post provideJob records
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


// get all Providejob records
exports.getProvidejob=async (req, res) => {
    console.log("get ApI placed student");
    const getprovideJob = await providejob.find();
    console.log(getprovideJob);
    res.status(200).send(getprovideJob);
};


// get endivitual providejob records
exports.getEndivitualProvidejob= async (req, res) => {
    try {
        const _id = req.params.id;
        const getEndivitualPJ = await providejob.findById(_id);
        console.log(getEndivitualPJ);
        if (!getEndivitualPJ) {
            return res.status(404).send();
        }
        else {
            res.send(getEndivitualPJ);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};


// updates provideJob records
exports.patchEndivitualProvideJob = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatesProvidejob = await providejob.findByIdAndUpdate(_id, req.body);
        res.send(updatesProvidejob)
    } catch (e) {
        res.status(400).send(e);
    }
};


// delete ProvideJob records 
exports.deleteProvideJob=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteProvideJob=await providejob.findByIdDelete(id);
      if(!deleteProvideJob){
          return res.status(400).send();
      }
      res.send(deleteProvideJob);
    }
    catch(e){
      res.status(500).send(e);
    }
};
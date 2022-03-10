const CompanyVisit=require('../models/Company');

// post comapny records

exports.postCompanyVisit=async (req, res) => {
    console.log("req at company");
    try {
        console.log(res.body);
        const companyRecord = new CompanyVisit(req.body);
        console.log(companyRecord);
        const result = await companyRecord.save();
        console.log(result);
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};


// get all company records
exports.getCompanyVisit= async (req, res) => {
    //    console.log("get API comapanyVisited");
    const getCompany = await CompanyVisit.find();
    res.send(getCompany);
};


// get endivitual comapny records
exports.getEndivitualCompanyRecord= async (req, res) => {
    try {
        const _id = req.params.id;
        const getEndivitualCompanyRecord = await CompanyVisit.findById(_id);
        console.log(getEndivitualT);
        if (!getEndivitualCompanyRecord) {
            return res.status(404).send();
        }
        else {
            res.send(getEndivitualCompanyRecord);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};


// Updates company records
exports.patchEndivitualCompanyRecord = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatesCompanyRecord = await
            CompanyVisit.findByIdAndUpdate(_id, req.body);
        res.send(updatesCompanyRecord)
    } catch (e) {
        res.status(400).send(e);
    }
};


// delete company record
exports.deleteCompanyVisit=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteCV=await CompanyVisit.findByIdDelete(id);
      if(!deleteCV){
          return res.status(400).send();
      }
      res.send(deleteCV);
    }
    catch(e){
      res.status(500).send(e);
    }
};
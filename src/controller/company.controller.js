const CompanyVisit=require('../models/Company');

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


exports.getCompanyVisit= async (req, res) => {
    //    console.log("get API comapanyVisited");
    const getCompany = await CompanyVisit.find();
    res.send(getCompany);
};
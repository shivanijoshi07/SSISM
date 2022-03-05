const express = require('express');
const Router = express.Router();


const trainner = require('../controller/trainner.controller');
const AlertJob = require('../controller/AlertJob.controller');
const company = require('../controller/company.controller');
const trainning = require('../controller/trainning.controller');
const PlacedSTD = require('../controller/PlacedSTD.controller');
const provideJob = require('../controller/provideJob.controller');



// require('./trainning.routes')(Router);

Router.get('/',async(req,res)=>{
res.send('ok server is working')

});


Router.post('/posttrainning', trainning.postTrainning);
Router.get('/gettrainning', trainning.getTrainning);


Router.post('/posttrainner', trainner.postTrainner);
Router.get('/gettrainner', trainner.getTranner);



Router.post('/postCompany', company.postCompanyVisit);
Router.get('/getCompany', company.getCompanyVisit);



Router.post('/postPlacedSTD', PlacedSTD.postPlacedSTD);
Router.get('/getPlacedSTD', PlacedSTD.getPlacedSTD);



Router.post('/postAlertJob', AlertJob.postAlertJob);
Router.get('/getAlertJob', AlertJob.getAlertJob);


Router.post('/postProvideJob', provideJob.providejobPost);
Router.get('/getProvideJob', provideJob.getProvidejob);



module.exports = Router;
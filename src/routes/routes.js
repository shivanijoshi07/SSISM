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
Router.get('/gettrainning/:id', trainning.getEndivitualTrainning);
Router.patch('/patchTrainning/:id',trainning.patchEndivitualTrainning);
Router.delete('/deleteTrainning/:id',trainning.deleteTrainning);


Router.post('/posttrainner', trainner.postTrainner);
Router.get('/gettrainner', trainner.getTrainner);
Router.get('/gettrainner/:id', trainner.getEndivitualTrainner);
Router.patch('/patchTrainner/:id',trainner.patchEndivitualTrainner);
Router.delete('/deleteTrainner/:id',trainner.deleteTrainner);



Router.post('/postCompany', company.postCompanyVisit);
Router.get('/getCompany', company.getCompanyVisit);
Router.get('/getCompany/:id', company.getCompanyVisit);
Router.patch('/patchCompany/:id',company.patchEndivitualCompanyRecord);
Router.delete('/deleteCompany/:id',company.deleteCompanyVisit);



Router.post('/postPlacedSTD', PlacedSTD.postPlacedSTD);
Router.get('/getPlacedSTD', PlacedSTD.getPlacedSTD);
Router.get('/getPlacedSTD/:id', PlacedSTD.getPlacedSTD);
Router.patch('/patchPlacedSTD/:id',PlacedSTD.patchEndivitualPlacedStd);
Router.delete('/deletePlacedSTD/:id',PlacedSTD.deletePlacedStd);



Router.post('/postAlertJob', AlertJob.postAlertJob);
Router.get('/getAlertJob', AlertJob.getAlertJob);
Router.get('/getAlertJob/:id', AlertJob.getAlertJob);
// Router.patch('/putAlertJob/:id',AlertJob.);
// Router.delete('deleteAlertJob/:id',AlertJob.);


Router.post('/postProvideJob', provideJob.providejobPost);
Router.get('/getProvideJob', provideJob.getProvidejob);
Router.get('/getProvideJob/:id', provideJob.getProvidejob);
Router.patch('/patchProvideJob/:id',provideJob.patchEndivitualProvideJob);
Router.delete('/deleteProvideJob/:id',provideJob.deleteProvideJob);



module.exports = Router;
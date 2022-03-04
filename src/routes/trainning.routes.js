// const { Router } = require("express");
const trainning = require('../controller/trainning.controller');

const middleWare = (req, res, next) => {

    console.log('i am a middle ware');
    if(req.body.Topic === 'notejs'){



        // next();
    }else{

        res.status(400).send('invalid topic name')
    }


}




// module.exports = (router) => {

//     router.post('/postTrainning', trainning.postTrainning)
//     router.get("/getTrainning",trainning.getTrainning)
// };
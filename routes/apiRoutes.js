const live = require('./live')
const database = require('./db')

   

//const {main} = require('../controllers/index.js')

const express  = require('express');
const router = express.Router();


//router.get('/', main.fetchAll);

router.use('/live', live);

router.use('/db', database)

//  router.get('/livestation', fetchLiveStation);

// router.get('/stationtimes', fetchStationTimetable);

//  router.get('/fetchservices', fetchServices);

// router.use('/articles', routes.articles)


module.exports = router;